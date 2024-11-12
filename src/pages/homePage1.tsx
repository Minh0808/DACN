import { Link } from "react-router-dom";
import images from "../configs/images";
import {
  Background,
  BodyContainer,
  ButtonNetwork,
  Connect,
  DivLeft,
  DivRight,
  IconCoins,
  IconContainer,
  IconNetwork,
  Market,
  Menu,
  Row1,
  Text,
  Text1,
  Text2,
  Title,
  Wraper,
  Animation
} from "./Component/styled/pageHome1";
import React, { useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import ModalToken from "./Component/modal/ModalToken";


const HomePage1: React.FC = React.memo(() => {

  const [OpenmodalToken, setOpenmodalToken] =  useState(false);
  const connectWallet = async () => {
    setOpenmodalToken(true)
    console.log ("setOpenmodalToken:", "active");
  };
  function closeModal() { 
    setOpenmodalToken(false)
    console.log("Modal closed");
  }
  const a =
    '{"p":"brc-20","op":"deploy","tick":"SN20","max":"21000000000000000","lim":"21000000000000000"}';

    
    AOS.init({
      duration: 1000,
      delay: 200,
  });
  return (
    <Background>
      <Menu>
        <Wraper>
          <Link to={"/"}>
            <img className="Logo" src={images.Logo} alt="Logo" />
            <img
              className="Logo-Mobile"
              src={images.LogoMobile}
              alt="Logo-Mobile"
            />
          </Link>
          <ButtonNetwork>
            {/* <Market>
              <Link to={"/market"} target="blank">
                <img
                  className="Market"
                  src={images.ButtonMarket}
                  alt="Market"
                />
              </Link>
            </Market> */}
            <Link to={"/tokenomic"} className="Link">
              Tokenomic
            </Link>
            <Link to={"/aridrop"} className="Link">
              AirDrop
            </Link>
            <Link to={"/crypto"} className="Link">
              Crypto New Feed
            </Link>
          </ButtonNetwork>
          <Connect onClick={connectWallet}>
            <img className="connect" src={images.ButtonConnect} alt="connect" />
          </Connect>
        </Wraper>
      </Menu>
      <div >
          {OpenmodalToken && <ModalToken  onClose={closeModal}/>}
      </div>
      <Title>
        <Animation>
          <img className="IconCoin1" src={images.IconCoin1} alt="IconCoin1" />
          <div className="Title">{a}</div>
        </Animation>
      </Title>
      <BodyContainer>
        <DivLeft>
          <Text1>
            <div className="text1">
              <div className="SN20">$SA20</div>
              <div className="Row-1"></div>
              the most memeable memecoin
            </div>
            on Bitcoin Chain.
          </Text1>
          <IconNetwork data-aos="fade-down">
            <a href="https://twitter.com/satsbrc" target="blank">
              <img className="tw" src={images.IconHome1} alt="tw" />
            </a>
            <a href="https://twitter.com/sn20brc" target="blank">
              <img className="tele" src={images.IconHome2} alt="tele" />
            </a>
          </IconNetwork>
          <Text2>
            <div className="Row-1">Buy</div>
            <div className="SN20">$SA20</div>
            <div className="Row-1">on crypto exchange</div>
          </Text2>
          <IconContainer>
            <IconCoins data-aos="fade-right">
              <Row1
                className="Row1"
                href="https://unisat.io/market/brc20?tick=sn20"
                target="blank"
              >
                <Text>UniSat</Text>
                <img
                  className="IconCoin"
                  src={images.IconHome4}
                  alt="IconCoin"
                />
              </Row1>
              <Row1>
                <Text>Binance</Text>
                <img
                  className="IconCoin"
                  src={images.IconHome5}
                  alt="IconCoin"
                />
              </Row1>
              <Row1>
                <Text>Poloniex</Text>
                <img
                  className="IconCoin"
                  src={images.IconHome6}
                  alt="IconCoin"
                />
              </Row1>
              <Row1>
                <Text>BitMart</Text>
                <img
                  className="IconCoin"
                  src={images.IconHome7}
                  alt="IconCoin"
                />
              </Row1>
              <Row1>
                <Text>BingX</Text>
                <img
                  className="IconCoin"
                  src={images.IconHome8}
                  alt="IconCoin"
                />
              </Row1>
              <Row1>
                <Text>AscendEX</Text>
                <img
                  className="IconCoin"
                  src={images.IconHome9}
                  alt="IconCoin"
                />
              </Row1>
            </IconCoins>
            <IconCoins data-aos="fade-left">
              <Row1>
                <Text>MEXC</Text>
                <img
                  className="IconCoin"
                  src={images.IconHome10}
                  alt="IconCoin"
                />
              </Row1>
              <Row1>
                <Text>OKX</Text>
                <img
                  className="IconCoin"
                  src={images.IconHome11}
                  alt="IconCoin"
                />
              </Row1>
              <Row1>
                <Text>BITGET</Text>
                <img
                  className="IconCoin"
                  src={images.IconHome12}
                  alt="IconCoin"
                />
              </Row1>
              <Row1>
                <Text>KUCOIN</Text>
                <img
                  className="IconCoin"
                  src={images.IconHome13}
                  alt="IconCoin"
                />
              </Row1>
              <Row1>
                <Text>GATE.IO</Text>
                <img
                  className="IconCoin"
                  src={images.IconHome14}
                  alt="IconCoin"
                />
              </Row1>
              <Row1>
                <Text>Lbank</Text>
                <img
                  className="IconCoin"
                  src={images.IconHome15}
                  alt="IconCoin"
                />
              </Row1>
            </IconCoins>
          </IconContainer>
        </DivLeft>
        <DivRight data-aos="fade-up">
          <img className="Images" src={images.IconHome3} alt="Images" />
        </DivRight>
      </BodyContainer>
    </Background>
  );
});
export default HomePage1;
