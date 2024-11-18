import { SetStateAction, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import images from "../configs/images";
import {
  Background,
  Body,
  Bottom,
  Box,
  Header,
  MINT,
  SA20,
  TitleBot,
  Wraper,
  Column1,
  Column2,
  Column3,
  IMG,
  Text,
  BoxHead,
  Link,
  Trade,
  View,
  Input,
  Row,
  BoxBody,
  ImagesCopy,
  Items,
  ImagesTool,
  Tool,
  NaviTool,
  Bottom_MobiLe,
} from "./Component/styled/tokenomic";
import MenuHome from "./Menu/menuHome";
import styled from "styled-components";
import ModalBox_1 from "./Component/modal/ModalBox_1";
import ModalBox_2 from "./Component/modal/ModalBox_2";

const MenuBox = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  .Back {
    width: 34px;
    height: 34px;
  }
  .Next {
    width: 34px;
    height: 34px;
  }
  .page {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: #ff9400;
  }
`;
const Tokenomic: React.FC = () => {
  const [Active, setActive] = useState(0);
  const [Box1, setBox1] = useState(true);
  const [Box2, setBox2] = useState(false);

  const HandelBack = (_active: any) => {
    setBox1(true);
    setBox2(false);
    setActive(_active);
  };
  const HandelNext = (_active: any) => {
    setBox1(false);
    setBox2(true);
    setActive(2);
  };

  return (
    <Background
      style={{
        backgroundImage: `url("./images/HomeIcon/Untitled.png")`,
      }}
    >
      <MenuHome />
      <Body>
        <Header>
          <SA20
            style={{
              backgroundImage: `url("./images/HomeIcon/SA20.png")`,
            }}
          />
          <MINT>MINT DIRECTLY</MINT>
        </Header>
        <Tool>
          <NaviTool>
            <p>0</p>
            <ImagesTool src={images.IconTool} />
            <p>100</p>
          </NaviTool>
          <ProgressBar
            className="ProgressBar"
            striped
            variant="warning"
            animated
            now={55}
          />
        </Tool>
        <Box>
          <BoxHead>
            Overview
            <div className="Link">
              <Link
                href="https://www.oklink.com/vi/btc/token/brc20/52890362"
                target="blank"
              >
                <View
                  style={{
                    backgroundImage: 'url("./images/HomeIcon/View.png")',
                  }}
                />
              </Link>
              <Link
                href="https://unisat.io/market/brc20?tick=sn20"
                target="blank"
              >
                <Trade
                  style={{
                    backgroundImage: 'url("./images/HomeIcon/Trade.png")',
                  }}
                />
              </Link>
            </div>
          </BoxHead>
          <BoxBody>
            <Row>
              Inscription
              <Items>
                <Input
                  type="text"
                  value={
                    "d463f8edd947688a8a6e5ca00ca83b304d83c634817b396d8675fe1ef77ff274i0"
                  }
                  style={{ color: "blue" }}
                />
                <ImagesCopy src={images.IconCopy} />
              </Items>
            </Row>
            <Row>
              Supply
              <Input type="text" value={"21.000.000.000.000.000"} />
            </Row>
            <Row>
              Minted
              <Input type="text" value={"4.200.000.000.000.000"} />
            </Row>
            <Row>
              Limit per mint
              <Input type="text" value={"21.000.000.000.000.000"} />
            </Row>
            <Row>
              Decimal
              <Input type="text" value={"18"} />
            </Row>
            <Row>
              Deploy By
              <Items>
                <Input
                  type="text"
                  value={"bc1qqg2et2hcrz6efn6u907kxjppmhu6xskvlcn9kh"}
                  style={{ color: "blue" }}
                />
                <ImagesCopy src={images.IconCopy} />
              </Items>
            </Row>
            <Row>
              Deploy Time
              <Input type="text" value={"02/01/2024 23:10:09"} />
            </Row>
            <Row>
              Inscription Number Start
              <Input type="text" value={"#52890362"} />
            </Row>
            <Row>
              Inscription Number End
              <Input type="text" value={"#52892227"} />
            </Row>
            <Row>
              Holders
              <Input type="text" value={"1"} />
            </Row>
            <Row>
              Total Transactions
              <Input type="text" value={"26"} />
            </Row>
          </BoxBody>
        </Box>
        <Box>
          <BoxHead className="Box2">
            <div className={Active === 1 ? "Page1" : ""}>
              <div className={Active === 1 ? "active" : ""}>Holders</div>
            </div>
            <div className={Active === 2 ? "Page2" : ""}>
              <div className={Active === 2 ? "active" : ""}>Transfers</div>
            </div>
          </BoxHead>
          <BoxBody className="BoxBody2">
            {Box1 && <ModalBox_1 />}
            {Box2 && <ModalBox_2 />}
            <MenuBox>
              <img
                className="Back"
                src={images.IconBack}
                onClick={() => HandelBack(1)}
              />
              <div className={Active === 1 ? "page" : ""}>1</div>
              <div className={Active === 2 ? "page" : ""}>2</div>
              <img
                className="Next"
                src={images.IconNext}
                onClick={() => HandelNext(1)}
              />
            </MenuBox>
          </BoxBody>
        </Box>
      </Body>
      <Bottom>
        <TitleBot>
          <img className="footer-PC" src={images.TitleHome5_PC} alt="" />
          <img className="footer-Mobile" src={images.TitleHome5_Mobile} alt="" />
        </TitleBot>
        <Wraper>
          <img
            className="ImagesBody"
            src={images.IconHomePage5_2}
            alt="ImagesBody"
          />
          <div className="Mobile">
            <Column1>
              <Text>
                <div className="Row">
                  <div className="Row-1">Buy</div>
                  <div className="SN20">$SA20</div>
                  <div className="Row-1">on</div>
                </div>
                crypto exchange
              </Text>
              <Text className="Items">UniSat</Text>
              <Text className="Items">Binance</Text>
              <Text className="Items">OKX</Text>
              <Text className="Items">Mexc</Text>
            </Column1>
            <Column2>
              <Text className="Text1">Language</Text>
              <Text className="Items">English</Text>
              <Text className="Items">Japanese</Text>
              <Text className="Items">Korean</Text>
              <Text className="Items">China</Text>
            </Column2>
          </div>
          <Column3>
            <Text className="Text1">Join with us</Text>

            <IMG>
              <a href="https://twitter.com/satsbrc" target="blank">
                <img
                  className="twitter"
                  src={images.IconHomePage5_4}
                  alt="twitter"
                />
              </a>
              <a href="https://twitter.com/sn20brc" target="blank">
                <img
                  className="telegram"
                  src={images.IconHomePage5_3}
                  alt="telegram"
                />
              </a>
            </IMG>
          </Column3>
          <Bottom_MobiLe>
            <img
              className="ImagesBot"
              height={30}
              width={30}
              src={images.IconHomePage5_5}
              alt="ImagesBot"
            />
            <Text className="textBot">2023 satsbrc.vip. All Right Reserved.</Text>
          </Bottom_MobiLe>
        </Wraper>
      </Bottom>
    </Background>
  );
};
export default Tokenomic;
