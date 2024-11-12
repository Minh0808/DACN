import React, { useEffect, useState } from 'react';
import MenuHome from "./Menu/menuHome";
import { Address, Background, Body, Chart, Chart_1, Column, ExchangeRate, Head, Information, Item, Logo, Menu, Moneyvalue, Newsfedd, Transaction, Wraper } from "./Component/styledCrypto";
import images from '../configs/images';
import { formatDistanceToNow } from 'date-fns';
import NewsFeed from './Component/Trans';

const TokenInfo: React.FC = () => {
  const [tokenData, setTokenData] = useState<any>(null); 
  const [info, setTokenInfo] = useState<any>(null);
  const [priceData, setPriceData] = useState<any>(null);
  const [tradeData, setTradeData] = useState<any>(null);  // New state for trade data

  async function fetchTokenData(): Promise<any> {
    try {
      // Fetch token info
      const response = await fetch('https://api.opsocialfi.com/call-token-overview?token=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82');
      if (!response.ok) throw new Error(`Error fetching token data: ${response.statusText}`);
      const data = await response.json();
      
      setTokenData(data.tokenData);
      setTokenInfo(data.info);

      // Fetch price and volume data
      const responsePrice = await fetch('https://api.opsocialfi.com/call-graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query ($network: evm_network, $token: String, $time24hAgo: DateTime) {
            EVM(network: $network) {
              DEXTradeByTokens(
                orderBy: {descendingByField: "vol24h"}
                where: {Trade: {Currency: {SmartContract: {is: $token}}}, Block: {Time: {after: $time24hAgo}}}
                limit: {count: 10}
              ) {
                Trade {
                  priceInUsd: PriceInUSD(maximum: Block_Number)
                  priceLast: Price(maximum: Block_Number)
                  price24hInUsd: PriceInUSD(minimum: Block_Number)
                }
                vol24h: sum(of: Trade_AmountInUSD)
              }
            }
          }`,
          variables: {
            network: "bsc",
            token: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
            time24hAgo: new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toISOString(),
          },
        }),
      });
      
      if (!responsePrice.ok) throw new Error(`Error fetching price data: ${responsePrice.statusText}`);
      const priceData = await responsePrice.json();
      setPriceData(priceData?.data?.EVM?.DEXTradeByTokens[0]);

      // Fetch trading data using the "tradingView" API
      const responseTrade = await fetch('https://api.opsocialfi.com/call-graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          operationName: "tradingView",
          query: `query tradingView($tokens: [String!]) {
            EVM(network: bsc) {
              DEXTrades(
                orderBy: {ascendingByField: "Block_Time"}
                limit: {count: 1000}
                where: {Trade: {Dex: {ProtocolName: {is: "uniswap_v3"}}, Sell: {Currency: {SmartContract: {in: $tokens}}}, Buy: {Currency: {SmartContract: {in: $tokens}}}}}
              ) {
                Block {
                  Time
                }
                Trade {
                  Buy {
                    PriceInUSD
                    Currency {
                      Symbol
                      SmartContract
                    }
                  }
                  Sell {
                    PriceInUSD
                    Currency {
                      Symbol
                      SmartContract
                    }
                  }
                }
              }
            }
          }`,
          variables: {
            tokens: ["0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", "0x55d398326f99059fF775485246999027B3197955"]
          },
        }),
      });

      if (!responseTrade.ok) throw new Error(`Error fetching trading data: ${responseTrade.statusText}`);
      const tradeData = await responseTrade.json();
      setTradeData(tradeData?.data?.EVM?.DEXTrades);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchTokenData();
    const intervalId = setInterval(fetchTokenData, 5000); // Update data every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  if (!tokenData || !priceData || !info || !tradeData) return <div>Loading...</div>;

  const currentPrice = priceData?.Trade?.priceInUsd || 1.93;
  const price24hAgo = priceData?.Trade?.price24hInUsd || 2.03;
  const priceChangePercentage = ((currentPrice - price24hAgo) / price24hAgo) * 100;
  const volume24h = priceData?.vol24h || 34917525;

  return (
    <Background className="token-info">
      <Menu>
        <MenuHome />
      </Menu>
      <Wraper>
        <Information>
          <Head>
            <Logo src={tokenData.logo} alt={`${tokenData.name} logo`} />
            <div>{tokenData.symbol}</div>
            <Address>{tokenData.address}</Address>
          </Head>
          <Body>
            <Column>
              <Item>
                <div>${currentPrice.toFixed(2)}</div>
                <Moneyvalue>{priceChangePercentage.toFixed(2)}%</Moneyvalue>
              </Item>
              <Item>
                <div>24h Volume:</div>
                <div>${Math.round(volume24h).toLocaleString('en-US')}</div>
              </Item>
            </Column>
            <Column>
              <Item>
                <div>Supply:</div>
                <div>{Math.round(info.totalSupply).toLocaleString('en-US')}</div>
              </Item>
              <Item>
                <div>Marketcap:</div>
                <div>${Math.round(info.mcap).toLocaleString('en-US')}</div>
              </Item>
            </Column>
            <Column>
              <Item>
                <div>Created:</div>
                <div>{tokenData?.creationTime ? `${Math.floor((new Date().getTime() - new Date(tokenData.creationTime).getTime()) / (1000 * 3600 * 24))}d ago` : '?'}</div>
              </Item>
              <Item>
                <div>Transactions:</div>
                <div>{info.transactions}</div>
              </Item>
            </Column>
            <Column>
              <Item>
                <div>Holders:</div>
                <div>{info.holders}</div>
              </Item>
              <Item>
                <div>FDV:</div>
                <div>{Math.round(info.fdv).toLocaleString('en-US')}</div>
              </Item>
            </Column>
          </Body>
        </Information>
        <Chart>
          <Chart_1 src={images.Chart_1} />
        </Chart>
      </Wraper>
      <ExchangeRate>
        <Transaction src={images.Transactionss}/>
        <Chart>
          <Chart_1 src={images.Chart_2} />
        </Chart>
        <Newsfedd src={images.NewsFeed}/>
      </ExchangeRate>
    </Background>
  );
};

export default TokenInfo;
