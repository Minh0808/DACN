import styled from "styled-components";
import MenuHome from "./Menu/menuHome";
import images from "../configs/images";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: black;
`;
const Wraper = styled.div`
  width: 535px;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 50px 180px 0px 0px;
  .ImgText {
    width: 100%;
    height: 80px;
  }
  .ImgSBRC {
    width: 100%;
    height: 80px;
  }
`;
const HeadAir = styled.div`
  width: 100%;
  height: 976px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-position: center;
  background-size: cover;
`;
const BoxAir = styled.div`
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 0px 14px #eca905);
  box-shadow: -1px 0px 8px 1px #fb9700;
  border-radius: 25px;
  border: 1px solid #fb9700;
  background: radial-gradient(
    50% 50% at -51.39% 50%,
    rgba(56, 64, 64, 0.4) 0%,
    rgba(56, 64, 64, 0.4) 7%,
    rgba(0, 0, 0, 0.5) 23%,
    rgba(0, 0, 0, 0.5) 40%,
    rgba(0, 0, 0, 0.14) 56%,
    rgba(0, 0, 0, 0.21) 72%,
    rgba(0, 0, 0, 0.17) 87%,
    rgba(0, 0, 0, 0.1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  .TitleBox {
    font-size: 25px;
    font-style: normal;
    font-weight: 900;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  .ButtonIcon {
    width: 127px;
    height: 33px;
  }
  .IconError {
    width: 27px;
    height: 23px;
  }
`;
const Text = styled.div`
  color: white;
`;
const Airdrop: React.FC = () => {
  return (
    <Background>
      <MenuHome />
      <HeadAir
        style={{
          backgroundImage: `url("./images/AirIcon/BackgroundAir.png")`,
        }}
      >
        <Wraper>
          <img className="ImgText" src={images.IconText} />
          <Text>is coming </Text>
          <img className="ImgSBRC" src={images.IconSBRC} />
          <BoxAir>
            <Text className="TitleBox">get FREE Airdrop</Text>
            <Text>(1/5) Completed</Text>
            <input placeholder="1.Enter wallet address"></input>
            <Row>
              2.Follow Twitter
              <img className="ButtonIcon" src={images.IconFollow} />
              <img className="IconError" src={images.IconError} />
            </Row>
            <Row>
              <Text>
                3.Share Event
                <Text>With tag 3 friends </Text>
                <Text>Hashtag: #satsbrc_channel</Text>
              </Text>
              <img className="ButtonIcon" src={images.IconShare} />
              <img className="IconError" src={images.IconError} />
            </Row>
            <Row>
              4.Join Channel
              <img className="ButtonIcon" src={images.IconJoin} />
              <img className="IconError" src={images.IconError} />
            </Row>
            <Text>5.Join Group</Text>
            <img src="" alt="" />
          </BoxAir>
        </Wraper>
      </HeadAir>
    </Background>
  );
};
export default Airdrop;
