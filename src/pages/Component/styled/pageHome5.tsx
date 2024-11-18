import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  background: #13161f;
`;
export const Wraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  align-items: flex-start;
  width: 100%;
  .Mobile {
    display: flex;
    flex-direction: row;
    gap: 80px;
  }
  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    border-bottom: none;
    position: relative;
    top: -40px;
    .Mobile {
      display: flex;
      flex-direction: row;
      gap: 20px;
      width: 100%;
      position: relative;
      top: -20px;
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

  .ImagesBody {
    width: 120px;
    height: 120px;
    @media (max-width: 575px) {
      width: 40%;
      height: 40%;
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
export const Title = styled.div`
  height: 200px;
  width: 100%;
  .footer-PC {
    width: 100%;
    height: 100%;
  }
  .footer-Mobile {
    display: none;
  }
  @media (max-width: 575px) {
    .footer-PC {
      display: none;
    }
    .footer-Mobile {
      display: block;
      width: 100%;
      height: 100%;
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
`;
export const Input = styled.input`
  width: 350px;
  height: 45px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  font-size: 22px;
`;
export const Emaill = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  align-items: center;
  .Button1 {
    position: absolute;
    right: 430px;
  }
  @media (max-width: 575px) {
    align-items: center;
    position: relative;
    left: -10px;
    .Button1 {
      position: absolute;
      right: 20px;
    }
  }
`;
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
`;
