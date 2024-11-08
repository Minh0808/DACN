import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 20px;
  @media (max-width: 575px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 0px;
  }
`;
export const Menu = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width:575px){
    height:100%;
  }
  .Logo-Mobile{
    display:none;
    @media (max-width: 575px) {
      width: 100px;
      height: 100px;
      display: block;
      position: relative;
  }
  }
  .Logo {
    width: 300px;
    @media (max-width: 575px) {
      width: 550px;
      height: 100px;
      display: none;
  }
`;
export const Wraper = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 575px) {
    justify-content: space-between;
    padding-right: 25px;
  }
`;
export const ButtonNetwork = styled.div`
  width: 350px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
  .Link {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
    :hover {
    height: 30px;
    display: flex;
    align-items: center;
    background: linear-gradient(
      90deg,
      #e86e00 -1.64%,
      #f18900 3.29%,
      #f99f00 9.22%,
      #fdac00 14.15%,
      #ffb100 19.09%,
      #e86e00 97.07%
    );
    border: 1px solid white;
    border-radius: 5px;
  }
  @media (max-width: 575px) {
    display: none;
  }
`;
export const Market = styled.div`
  width: 160px;
  height: 40px;
  .Market {
    width: 160px;
    height: 40px;
  }
  @media (max-width: 575px) {
    width: 120px;
    height: 35px;
    .Market {
      width: 100%;
      height: 35px;
    }
  }
`;

export const Connect = styled.a`
  width: 160px;
  height: 40px;
  .connect {
    width: 160px;
    height: 44px;
  }
  @media (max-width: 575px) {
    width: 130px;
    height: 35px;
    .connect {
      width: 100%;
      height: 100%;
    }
  }
`;
export const Title = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  height: 50px;
  white-space: nowrap;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .IconCoin1 {
    width: 24px;
  }
  .background {
    background: linear-gradient(
      270deg,
      rgba(37, 36, 51, 0.2) 1.16%,
      rgba(37, 36, 51, 0.8) 54.59%,
      rgba(37, 36, 51, 0.2) 100%
    );
    height: 40px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    border-radius: 17px;
    @media (max-width: 575px) {
      background: none;
    }
  }
  .Title {
    background: -webkit-linear-gradient(
      #fdd65d 0.01%,
      #fdd55c 0.02%,
      #0040e8 0.03%,
      #fcd55c 0.04%,
      #fcd45c 12.68%,
      #fcb548 47.67%,
      #f99c3c 54.89%,
      #f59133 81.57%,
      #fdac00 102.48%,
      #ffb100 102.49%,
      #fa6c1d 102.5%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 16px;
  }
  @media (max-width: 575px) {
    height: 25px;

    align-items: center;
    border-radius: 17px;
    background: linear-gradient(
      270deg,
      rgba(37, 36, 51, 0.2) 1.16%,
      rgba(37, 36, 51, 0.8) 54.59%,
      rgba(37, 36, 51, 0.2) 100%
    );
    gap: 5px;
    .Title {
      font-size: 7px;
    }
    .IconCoin1 {
      width: 12px;
      height: 12px;
    }
  }
`;
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
  }
`;
export const Text = styled.div`
  color: #9e9e9e;
  font-size: 32px;
  :hover {
    color: white;
  }
  @media (max-width: 575px) {
    font-size: 24px;
  }
`;
export const Text1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  gap: 6px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1px;
  .text1 {
    display: flex;
    flex-direction: row;
    gap: 3px;
    align-items: center;
  }
  .SN20 {
    background: var(
      --logo-color,
      linear-gradient(
        180deg,
        #fdd65d 0.01%,
        #fdd55c 0.02%,
        #0040e8 0.03%,
        #fcd55c 0.04%,
        #fcd45c 12.68%,
        #fcb548 47.67%,
        #f99c3c 54.89%,
        #f59133 81.57%,
        #fdac00 102.48%,
        #ffb100 102.49%,
        #fa6c1d 102.5%
      )
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  @media (max-width: 575px) {
    font-size: 14px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    .SN20 {
      font-size: 16px;
    }
  }
`;
export const Text2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  .SN20 {
    background: var(
      --logo-color,
      linear-gradient(
        180deg,
        #fdd65d 0.01%,
        #fdd55c 0.02%,
        #0040e8 0.03%,
        #fcd55c 0.04%,
        #fcd45c 12.68%,
        #fcb548 47.67%,
        #f99c3c 54.89%,
        #f59133 81.57%,
        #fdac00 102.48%,
        #ffb100 102.49%,
        #fa6c1d 102.5%
      )
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .Row-1 {
    color: white;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1px;
  }
  @media (max-width: 575px) {
    font-size: 14px;
    font-weight: 900;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    .TextImg_2 {
      width: 70%;
      height: 80%;
    }
    .SN20 {
      font-size: 16px;
    }
  }
`;
export const IconNetwork = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  .tw {
    width: 70px;
    @media (max-width: 575px) {
      height: 50px;
      width: 50px;
    }
  }
  .tele {
    width: 70px;
    @media (max-width: 575px) {
      height: 50px;
      width: 50px;
    }
  }
`;
export const IconCoins = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  :hover {
    background: #252433;
    color: white;
  }
  .IconCoin {
    @media (max-width: 575px) {
      height: 50px;
    }
  }
  @media (max-width: 575px) {
    width: 100%;
    align-items: center;
  }
`;
export const Row1 = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #1d1b20;
  height: 70px;
  border-radius: 8px;
  padding: 0px 15px 0px 20px;
  text-decoration: none;
  @media (max-width: 575px) {
    width: 100%;
    padding: 0px 15px 0px 20px;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  justify-content: center;
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;
export const DivLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  .ColumnPC {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 22px;
    gap: 5px;
    @media (max-width: 575px) {
      flex-direction: column;
      align-items: flex-start;
    }
    .ColumnPC_Mobile {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 22px;
      gap: 5px;
      @media (max-width: 575px) {
        flex-direction: row;
      }
    }
  }
  .Text2 {
    font-size: 22px;
    font-weight: 900;
    color: white;
    @media (max-width: 575px) {
      font-size: 16px;
      padding-left: 10px;
    }
  }
`;
export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .Images {
    @media (max-width: 575px) {
      width: 70%;
    }
  }
`;
