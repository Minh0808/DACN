import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 575px) {
    width: 100%;
    height: 100%;
    gap: 50px;
    padding-top: 30px;
  }
`;
export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  .Title {
    height: 326px;
    width: 245px;
    @media (max-width: 575px) {
      width: 600px;
      height: 54px;
    }
  }
  .SBRCsystem {
    width: 330px;
    height: 80px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 575px) {
    .SBRCsystem {
      width: 250px;
      height: 70px;
    }
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  justify-content: center;
  @media (max-width: 575px) {
    flex-direction: column;
  }
  .Mobile {
    @media (max-width: 575px) {
      position: relative;
      // top: -130px;
    }
  }
  .Title {
    width: 350px;
    height: 300px;
    @media (max-width: 575px) {
      display: none;
    }
  }
  .TitleMobile {
    display: none;
    @media (max-width: 575px) {
      display: block;
      width: 80%;
      position: absolute;
      top: 452%;
    }
  }
`;
export const TextLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  :hover {
    background: rgb(59 130 246 / 0.5);
  }
  @media (max-width: 575px) {
    align-items: center;
    position: relative;
    top: 230px;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  @media (max-width: 575px) {
    align-items: center;
  }
`;
export const Text1 = styled.div`
  .SBRCintroduce {
    width: 360px;
    height: 80px;
    display: flex;
    align-items: center;
  }
  .SBRCsystem {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 575px) {
    font-size: 32px;
    .SBRCintroduce {
      width: 300px;
      height: 70px;
    }
  }
`;
export const Text2 = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  width: 100%;
  position: relative;
  left: 23px;
  @media (max-width: 575px) {
    width: 90%;
    left: 0;
    font-size: 16px;
  }
`;
export const Text3 = styled.div`
  color: white;
  font-size: 26px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  @media (max-width: 575px) {
    font-size: 24px;
  }
`;
export const Text4 = styled.div`
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  // line-height: 20px;
  @media (max-width: 575px) {
    font-size: 16px;
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  left: 10%;
  width: 80%;
  @media (max-width: 575px) {
    flex-direction: column;
    left: 0px;
    width: 100%;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 100%;
  border-radius: 10px;
  background: #000000;
  padding: 15px;
  gap: 30px;
  box-shadow: 0px 0px 5px 6px #9ca3af;
  :hover {
    background: none;
  }
  @media (max-width: 575px) {
    width: 89%;
    padding: 20px;
  }
`;
