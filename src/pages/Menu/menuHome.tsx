import { Link } from "react-router-dom";
import styled from "styled-components";
import images from "../../configs/images";
import { ethers } from "ethers";
import { useState, useEffect } from "react";

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
  const [accountGB, setAccount] =  useState('')

  const tokenAddress = '0xA9Bf85463936F1EA7038bA4cFDeB2E71b001ff2d'
  const ABI = '[{"inputs":[{"internalType":"address","name":"feeReceiver_","type":"address"},{"internalType":"address","name":"router_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableTrading","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"isSkip","type":"bool"}],"name":"setSkiptax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"skipTax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
  
  const getSigner = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
            // Yêu cầu tài khoản từ ví
      await window.ethereum.request({ method: 'eth_requestAccounts' });
            
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
          setAccount(account)
            
          console.log("Account:", account);
          return {signer, account}
        } catch (error) {
          console.error("Vui long caif dat metamask:", error);
        }
      } else {
        console.error("Ethereum provider is not available");
      }
    }

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
          <Connect onClick={getSigner}>
            <img className="connect" src={images.ButtonConnect} alt="connect" />
          </Connect>
        </Wraper>
      </Menu>
    </>
  );
};
export default MenuHome;
