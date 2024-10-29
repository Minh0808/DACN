import images from "../configs/images";
import {
  Container,
  Column1,
  Text,
  Title,
  Wraper,
  IMG,
  Bottom,
  Column2,
  Column3,
  Input,
  Emaill,
} from "./Component/styled/pageHome5";
import { useEffect, useState } from "react";

const PageHome5: React.FC = () => {
  // const [Email, setEmail] = useState('')
  return (
    <Container>
      <Title>
        <img className="footer-PC" src={images.TitleHome5_PC} alt="" />
        <img className="footer-Mobile" src={images.TitleHome5_Mobile} alt="" />
      </Title>
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
          {/* <Emaill>
            <Input
              placeholder="Your Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            {Email.length > 0 && (
              <button className="Button1">
                <img src={images.IconHomePage5_6} className='abc' alt='abc'/>
              </button>
            )}
          </Emaill> */}
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
      </Wraper>
      <Bottom>
        <img
          className="ImagesBot"
          height={30}
          width={30}
          src={images.IconHomePage5_5}
          alt="ImagesBot"
        />
        <Text className="textBot">2023 satsbrc.vip. All Right Reserved.</Text>
      </Bottom>
    </Container>
  );
};
export default PageHome5;
