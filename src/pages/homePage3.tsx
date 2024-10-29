"use client";

import images from "../configs/images";
import {
  Container,
  Row,
  Text,
  Text1,
  Text2,
  Text3,
  Text4,
  TextContainer,
  TextLeft,
  Title,
  Wraper,
} from "./Component/styled/pageHome3";

const PageHome3: React.FC = () => {
  return (
    <Container>
      <Title>
        <img width={334} height={334} src={images.IconHomePage3_2} />
        <Text>
          <Text1 className="SBRCintroduce">
            <img
              className="SBRCintroduce"
              src={images.SBRCintroduce}
              alt="SBRCintroduce"
            />
          </Text1>
          <Text2>
            SA20 Bridge prioritizes security, leveraging a decentralized
            cross-chain protocol with native Bitcoin miner participation. The
            use of Taproot upgrades and aggregate signatures from decentralized
            data indexers safeguards user funds. Unlike traditional
            multi-signature mechanisms, our fully decentralized 'Web3' approach
            enhances cross-chain security
          </Text2>
        </Text>
      </Title>
      <Wraper>
        <Text1 className="SBRCsystem">
          <img
            className="SBRCsystem"
            src={images.SBRCsystem}
            alt="SBRCsystem"
          />
        </Text1>
        <TextContainer>
          <TextLeft>
            <Row>
              <Text3>Reliability</Text3>
              <Text4>
                SN20 Bridge prioritizes security, leveraging a decentralized
                cross-chain protocol with native Bitcoin miner participation.
                The use of Taproot upgrades and aggregate signatures from
                decentralized data indexers safeguards user funds. Unlike
                traditional multi-signature mechanisms, our fully decentralized
                Web3 approach enhances cross-chain security
              </Text4>
            </Row>
            <Row>
              <Text3>Compatibility</Text3>
              <Text4>
                BRC-20X, a token protocol focused on cross-chain
                interoperability, places significant emphasis on compatibility
                with pre-existing BRC-20 tokens. Specifically, our proposed
                BRC-20X token protocol ensures secure cross-chain support,
                allowing seamless bridging of tokens like $ordi, $sats, and
                $rats through SBRC from the Bitcoin network. This facilitates
                the unlocking of the full potential of BRC-based applications.
              </Text4>
            </Row>
          </TextLeft>
          <img className="Title" src={images.IconHomePage3_1} alt="Title" />
          <img
            className="TitleMobile"
            src={images.IconHomePage5_2}
            alt="TitleMobile"
          />
          <TextLeft className="Mobile">
            <Row>
              <Text3>Stimulus</Text3>
              <Text4>
                We promote users active involvement in cross-chain transfers of
                BRC-20(X) tokens, enabling them to circulate on major smart
                contract platforms like Ethereum and the SBRC mainnet. This
                circulation is crucial for the development of BRC-based
                applications. To encourage and facilitate this process, we offer
                cross-chain incentives for each transaction on SBRC, using our
                platform token $sbrc. Our commitment extends to the ongoing
                enhancement of the BRC-20(X) token ecosystem on both SBRC
                mainnet and Ethereum.
              </Text4>
            </Row>
          </TextLeft>
        </TextContainer>
      </Wraper>
    </Container>
  );
};
export default PageHome3;
