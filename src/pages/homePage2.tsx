import images from "../configs/images";
import {
  Container,
  Img,
  RowTop,
  Text,
  Title,
  Wraper,
} from "./Component/styled/pageHome2";

const PageHome2: React.FC = () => {
  return (
    <Container
      style={{
        backgroundImage: `url("./images/HomeIcon/Section 2-min.png")`,
      }}
    >
      <Wraper>
        <Title>
          <img
            className="IconHomePage2_Title"
            src={images.IconHomePage2_Title}
            alt="IconHomePage2_Title"
          />
        </Title>
        <RowTop className="Text1">
          <Text>
            $SN20 is short for Satoshi, the smallest unit of Bitcoin, each
            bitcoin is divisible into 100,000,000 satoshi.
          </Text>
          <Text>One Satoshi (SN20) is equal to 0.00000001 BTC.</Text>
          <Text>
            On the Bitcoin blockchain and in its source code, all amounts of
            bitcoin are denominated in satoshis.{" "}
          </Text>
          <Text>
            These amounts are only converted to bitcoin for familiarity and
            readability.
          </Text>
        </RowTop>
      </Wraper>
    </Container>
  );
};
export default PageHome2;
