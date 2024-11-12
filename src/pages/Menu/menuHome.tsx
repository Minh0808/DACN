import { Link } from "react-router-dom";
import styled from "styled-components";
import images from "../../configs/images";

const Menu = styled.div`
width: 100%;
height: 100%;
// align-items: center;
// display: flex;
// flex-direction: row;
// justify-content: space-between;
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
    position: relative;
    left: -40px;
    @media (max-width: 575px) {
      width: 550px;
      height: 100px;
      display: none;
  }
  `;
const Wraper = styled.div`
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
const ButtonNetwork = styled.div`
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
const Connect = styled.a`
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
const MenuHome: React.FC = () => {
  return (
    <>
      <Menu>
        <Wraper>
        <Link to={"/"}>
            <img className="Logo" src={images.Logo} alt="Logo" />
            <img
              className="Logo-Mobile"
              src={images.LogoMobile}
              alt="Logo-Mobile"
            />
          </Link>
          <ButtonNetwork>
            <Link to={"/tokenomic"} className="Link">
              Tokenomic
            </Link>
            <Link to={"/airdrop"} className="Link">
              AirDrop
            </Link>
            <Link to={"/crypto"} className="Link">
              Crypto New Feed
            </Link>
          </ButtonNetwork>
          <Connect
            href="https://unisat.io/market/brc20?tick=sn20"
            target="blank"
          >
            <img className="connect" src={images.ButtonConnect} alt="connect" />
          </Connect>
        </Wraper>
      </Menu>
    </>
  );
};
export default MenuHome;
