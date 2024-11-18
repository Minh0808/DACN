import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 50px;
`;
export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  gap: 500px;
  padding-bottom: 50px;
  @media (max-width: 575px) {
  }
  .Text1 {
    @media (max-width: 575px) {
      gap: 20px;
      position: relative;
      top: 75px;
    }
  }
  .Title {
    height: 32px;
    width: 300px;
    @media (max-width: 575px) {
      width: 600px;
      height: 54px;
    }
  }
`;
export const RowTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
  justify-content: center;

  :hover {
    background: rgb(59 130 246 / 0.5);
  }
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Text = styled.div`
  color: white;
  width: 295px;
  height: 150px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: #000;
  box-shadow: 0px 0px 4px 4px rgba(255, 255, 255, 0.6);
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 575px) {
    font-size: 18px;
    width: 280px;
  }
`;
export const Title = styled.div`
  width: 300px;
  height: 70px;
  .IconHomePage2_Title {
    width: 100%;
    height: 100%;
    position: relative;
    top: -30%;
  }
  @media (max-width: 575px) {
    font-size: 32px;
  }
`;
export const Img = styled.div`
  display: flex;
  justify-content: center;
  .ImagePage2 {
    @media (max-width: 575px) {
      width: 1000px;
      height: 1000px;
    }
  }
`;
