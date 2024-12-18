import styled from "styled-components";

export const ModalContainer_1 = styled.div`
  width: 700px;
  height: 390px;
  display: flex;
  align-items: center;
  background: #000000;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 6px #ffffff47;
  color: white;
  padding: 0px 175px;
  line-height: 2;
  @media (max-width: 575px) {
    height: 190px;
    width: 87%;
    position: relative;
    font-size: 18px;
    top: -332px;
    padding: 0px;
    line-height: 1.5;
  }
`;
export const Text = styled.div`
  padding: 0px 40px;
  font-size: 20px;
  @media (max-width: 575px) {
    padding: 5px 10px;
    font-size: 18px;
  }
`;
export const ModalContainer_2 = styled.div`
  width: 700px;
  height: 390px;
  display: flex;
  align-items: center;
  background: #000000;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 6px #ffffff47;
  color: white;
  padding: 0px 175px;
  line-height: 2;
  @media (max-width: 575px) {
    height: 190px;
    width: 87%;
    position: relative;
    font-size: 18px;
    top: -332px;
    padding: 0px;
    line-height: 1.5;
  }
`;
export const ModalContainer_3 = styled.div`
  width: 700px;
  height: 390px;
  display: flex;
  align-items: center;
  background: #000000;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 6px #ffffff47;
  color: white;
  padding: 0px 175px;
  line-height: 2;
  @media (max-width: 575px) {
    height: 190px;
    width: 87%;
    position: relative;
    font-size: 18px;
    top: -332px;
    padding: 0px;
    line-height: 1.5;
  }
`;
export const ModalContainer_4 = styled.div`
  width: 700px;
  height: 390px;
  display: flex;
  align-items: center;
  background: #000000;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 6px #ffffff47;
  color: white;
  padding: 0px 175px;
  line-height: 2;
  @media (max-width: 575px) {
    height: 190px;
    width: 87%;
    position: relative;
    font-size: 18px;
    top: -332px;
    padding: 0px;
    line-height: 1.5;
  }
`;
export const ModalContainer_Token = styled.div`
  width: 700px;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  left: 30%;
  background: linear-gradient(90deg, #e86e00 -1.64%, #f18900 3.29%, #f99f00 9.22%, #fdac00 14.15%, #ffb100 19.09%, #e86e00 97.07%);
  justify-content: flex-start;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 6px #ffffff47;
  color: black;
  line-height: 2;
  padding-top: 20px;
  gap: 100px;
  z-index: 1000;
  @media (max-width: 575px) {
    width: 350px;
    left: 20px;
    gap: 85px;
    height: 340px;
  }
`
export const Information = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Input = styled.input`
  width: 405px;
  height: 30px;
  border-radius: 5px;
  border: none;

  @media (max-width: 575px) {
    width: 250px;
    font-size: 9px;
  &[name="SendToken"] {
    width: 230px;
    }
  }
`
export const Left = styled.div`
  display: flex;
  flex-direction: column;
`
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 575px) {
    gap: 17px;
  }
`
export const Act = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  gap: 50px;
  @media (max-width: 575px) {
    gap: 15px;
  }
`
export const Send = styled.div`
  width: 50px;
  height: 50px;
  
  background-image: url(./images/HomeIcon/sendToken.png);
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: center;
  border-radius: 25px;
  border: none;
`
export const Connect = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(./images/HomeIcon/wallet.png);
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 25px;
  border: none;
`
export const Sell = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(./images/HomeIcon/sellToken.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  border: none;
`
export const Close = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(./images/HomeIcon/close.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  border: none;
`
export const Column = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: none;
  color: blue;
`
export const BoxSendToken = styled.div`
    width: 630px;
    height: 340px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    left: 33%;
    top: 121px;
    background: linear-gradient(90deg, #c6c7c8 19.09%, #6fbd98 97.07%);
    justify-content: flex-start;
    border-radius: 15px;
    box-shadow: 0px 0px 5px 6px #ffffff47;
    color: black;
    line-height: 2;
    padding-top: 20px;
    gap: 70px;
    @media (max-width: 575px) {
      width: 330px;
      height: 320px;
      left: 30px;
      top: 140px;
  }
`