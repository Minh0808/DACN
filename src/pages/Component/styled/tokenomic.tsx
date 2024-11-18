import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding-top: 150px;
  .ProgressBar {
    width: 100%;
    height: 30px;
    border: 5px solid #cacad8;
  }
`;
export const Header = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const NaviTool = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-between;
  width: 100%;
`;
export const Tool = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  align-items: flex-end;
  height: 100%;
`;
export const SA20 = styled.div`
  width: 150px;
  height: 42px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  left: -22px;
`;
export const MINT = styled.button`
  background: linear-gradient(#000, #000) padding-box,
    linear-gradient(to right, #ff4f60, #ffc617) border-box;
  border-radius: 15px;
  border: 3px solid transparent;
  width: 160px;
  height: 42px;
  color: white;
  text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.4);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Title = styled.div`
  width: 100%;
  height: 100%;
`;
export const Box = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #000;
  box-shadow: 0px 0px 4px 4px rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  gap: 50px;
  align-items: center;
  @media only screen and (max-width: 390px) and (orientation: portrait){
    gap: 10px;
  }
  .Box2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 30px;
  }
  .BoxBody2 {
    gap: 60px;
    padding-bottom: 60px;
  }
`;
export const BoxHead = styled.div`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0px 30px;
  .Link {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
  .Page1 {
    width: 83px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: #3f3c3c;
  }
  .Page2 {
    width: 97px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: #3f3c3c;
  }
  .active {
    font-weight: 700;
    background: var(
      --mau-chu-dao,
      linear-gradient(
        90deg,
        #e86e00 -1.64%,
        #f18900 3.29%,
        #f99f00 9.22%,
        #fdac00 14.15%,
        #ffb100 19.09%,
        #e86e00 97.07%
      )
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const Link = styled.a``;
export const View = styled.div`
  width: 107px;
  height: 44px;
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 390px) and (orientation: portrait){
    width: 50px;
    height: 20px;
  }
`;
export const Trade = styled.div`
  width: 107px;
  height: 44px;
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 390px) and (orientation: portrait){
    width: 50px;
    height: 20px;
  }
`;
export const BoxBody = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-bottom: 30px;
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
export const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Input = styled.input`
  background: #2f292a;
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 8px;
  padding: 0px 20px;
  font-size: 16px;
  color: white;
`;
export const ImagesCopy = styled.img`
  width: 30px;
  position: absolute;
  right: 290px;
`;
export const ImagesTool = styled.img`
  width: 30px;
  height: 40px;
  position: relative;
  left: 63px;
`;
export const Bottom = styled.div`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 390px) and (orientation: portrait){
    padding-top: 50px;
  }
`;
export const TitleBot = styled.div`
  width: 100%;
  height: 200px;
  .footer-PC {
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 390px) and (orientation: portrait){
      display: none;
    }
  }
  .footer-Mobile{
    width: 100%;
    height: 100%;
  }
`;
export const Wraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  align-items: flex-start;
  border-bottom: 1px solid #4f5259;
  width: 100%;
  .ImagesBody {
    width: 150px;
    height: 150px;
    @media (max-width: 575px) {
      width: 50%;
      height: 50%;
    }
  }
  .Mobile {
    display: flex;
    flex-direction: row;
    gap: 80px;
  }
  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    border-bottom: 1px solid #4f5259;
    .Mobile {
      display: flex;
      flex-direction: row;
      gap: 20px;
      width: 100%;
    }
  }
  .Text1 {
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: bold;
    @media (max-width: 575px) {
      font-size: 22px;
      gap: 5px;
    }
  }
`;
export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 240px;
  gap: 30px;
  .Buy5 {
    width: 250px;
  }
  .Items {
    color: #9e9e9e;
    font-size: 14px;
  }
  :hover {
    color: white;
  }
  @media (max-width: 575px) {
    width: 70%;
    padding-left: 40px;
    .Buy5 {
      width: 100%;
    }
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1px;
  .Row {
    display: flex;
    flex-direction: row;
    gap: 6px;
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
  .Row-1 {
    color: white;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1px;
  }
  @media (max-width: 575px) {
    font-size: 18px;
  }
`;
export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 150px;
  gap: 30px;
  .Items {
    color: #9e9e9e;
    font-size: 14px;
  }
  :hover {
    color: white;
  }
  @media (max-width: 575px) {
    width: 50%;
    .Text1 {
      font-size: 20px;
    }
  }
`;
export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 30px;
  align-items: flex-start;
  @media (max-width: 575px) {
    width: 100%;
    align-items: center;
  }
`;
export const IMG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .twitter {
    height: 60px;
    width: 60px;
  }
  .telegram {
    height: 40px;
  }
`
export const Bottom_MobiLe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 0px 20px 0px;
  border-top: 1px solid #9999;
  width: 100%;
  @media (max-width: 575px) {
    position: relative;
    border-top: 1px solid #99999999;
    width: 100%;
    padding: 10px 0px 10px 0px;
  }
  .ImagesBot {
    @media (max-width: 575px) {
      width: 20px;
      height: 20px;
    }
  }
  .textBot {
    color: white;
    @media (max-width: 575px) {
      font-size: 14px;
    }
  }
`
