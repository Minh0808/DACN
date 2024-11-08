import React, { useEffect, useState } from 'react';
import MenuHome from "./Menu/menuHome";
import {Address, Background, Body, Chart, Chart_1, Column, ExchangeRate, Head, Information, Item, Logo, Moneyvalue, Wraper} from "./Component/market"
import images from '../configs/images';
const TokenInfo: React.FC = () => {
    const [tokenData, setTokenData] = useState<any>(null)
    const [info, setTokenInfo] = useState<any>(null)
    
    async function fetchTokenData(): Promise<any> {
      try {
          const response = await fetch('https://api.opsocialfi.com/call-token-overview?token=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'); // Thay 'URL_API_CỦA_BẠN' bằng đường dẫn API thực tế
          if (!response.ok) {
              throw new Error(`Lỗi khi gọi API: ${response.statusText}`);
          }
          const data = await response.json();
          return data;
      } catch (error) {
          console.error("Lỗi khi lấy dữ liệu token:", error);
          throw error;
      }
  }


  useEffect(() => {
    fetchTokenData()
        .then(data => {
            setTokenData(data.tokenData)
            console.log("Dữ liệu tokenData:", data.tokenData); // Log dữ liệu tokenData

            setTokenInfo(data.info)
            console.log("Dữ liệu tokenInfo:", data.info); // Log dữ liệu tokenData
        })
        .catch(console.error);
}, []);

const getDaysSinceCreation = (creationTime: number): number => {
  const currentTime = Date.now(); // Thời gian hiện tại tính bằng milliseconds
  const creationTimeInMs = creationTime * 1000; // Chuyển đổi creationTime từ giây thành milliseconds
  const diffInMs = currentTime - creationTimeInMs; // Tính chênh lệch giữa thời gian hiện tại và creationTime
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24); // Chuyển đổi milliseconds thành số ngày
  return Math.floor(diffInDays); // Làm tròn xuống số nguyên
};

if (!tokenData) return <div>Đang tải dữ liệu...</div>;

return (
  <Background className="token-info">
    <MenuHome/>
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
                <div>$ 1.81</div>
                 <Moneyvalue>?</Moneyvalue>
              </Item>
              <Item>
                <div>24h Volume:</div>
                <div>?</div>
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
                 <div>?</div>
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
        <Chart_1 src={images.Chart_1}/>
      </Chart>
    </Wraper>
    <ExchangeRate>
      <div></div>
      <Chart>
        <Chart_1 src={images.Chart_2}/>
      </Chart>
      <div></div>
    </ExchangeRate>
  </Background>
);
};
export default TokenInfo;
