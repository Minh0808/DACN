import React, { useState } from 'react';
import styled from 'styled-components';
import MenuHome from './Menu/menuHome';
import images from '../configs/images';
import { ethers } from 'ethers';
import ModalToken from './Component/modal/ModalToken';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  padding: 0px 0px 30px 0px;
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
  height: 75%;
  gap: 10px;
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

const Text = styled.div`
  color: white;
`;

const Boxchat = styled.div`
  background: #f5f1e3;
  width: 100%;
  height: 85%;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border: none;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #0d6efd;
  font-size: 18px;
`;
const ValueBoxchat = styled.div`
  margin: 0;
    padding: 0;
    line-height: 1.2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const EnterChat = styled.input`
  width: 100%;
  height: 50px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  padding: 10px;
  background: #f5f1e3;
`;

const Button = styled.button`
  background-color: #fb9700;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 16px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-left: 10px;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px
`;

const Airdrop: React.FC = () => {
  const [BoxChat, setBoxChat] = useState<string[]>([]);
  const [UseChat, setUseChat] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const [accountGB, setAccount] =  useState('')
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [OpenmodalToken, setOpenmodalToken] =  useState(false);
  const forbiddenWords = ['me'];
  const userInfo = {
    User: "0x4DE70A420e5d6da282820745134dc0990126Bd2d"
  };
  

  const getSigner = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
  
        // Cập nhật userInfo với ID ví và trạng thái kết nối ví
        userInfo.User = account;
        setIsWalletConnected(true); // Đánh dấu là đã kết nối ví
        console.log("User Account:", account);
  
        return { signer, account };
      } catch (error) {
        console.error("Vui lòng cài đặt MetaMask:", error);
      }
    } else {
      console.error("Ethereum provider is not available");
    }
  };
  
  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && typeof UseChat === 'string' && UseChat.trim() !== '') {
      // Kiểm tra xem ví đã kết nối hay chưa
      if (!isWalletConnected) {
        // Nếu ví chưa kết nối, yêu cầu kết nối ví và hiển thị thông báo
        setErrorMessage("Please connect your wallet to send messages.");
        const signerData = await getSigner();
        if (!signerData || !signerData.account) {
          return; // Nếu không thể kết nối ví, không cho phép tiếp tục
        }
      }
  
      // Nếu ví đã kết nối, cho phép chat
      if (isBlocked) {
        setErrorMessage('You are being blocked from chatting.');
        return;
      }
  
      const containsForbiddenWord = forbiddenWords.some((word) =>
        UseChat.toLowerCase().includes(word)
      );
  
      if (containsForbiddenWord) {
        setErrorMessage('Violate community rules. Ban chat for 7 days!');
        setBoxChat((prevBoxChat) => [...prevBoxChat, `violate: ${UseChat}`]);
        setUseChat('');
        setIsBlocked(true);
  
        // Đặt lại trạng thái chặn sau 7 ngày
        setTimeout(() => {
          setIsBlocked(false);
          setErrorMessage('');
        }, 7 * 24 * 60 * 60 * 1000);
      } else {
        // Lấy 5 ký tự đầu và 3 ký tự cuối của ID ví
        const shortAccount = userInfo.User ? `${userInfo.User.slice(0, 5)}...${userInfo.User.slice(-3)}` : 'Unknown';
        const userInfoMessage = `User: ${shortAccount}`;
        setBoxChat((prevBoxChat) => {
          const updatedBoxChat = [...prevBoxChat, userInfoMessage, UseChat];
          if (updatedBoxChat.length > 10) {
            updatedBoxChat.shift();
          }
          return updatedBoxChat;
        });
        setUseChat('');
        setErrorMessage('');
      }
    }
  };
  
      
      
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isBlocked) {
      setUseChat(event.target.value);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Address has been coppy!');
  };

  const handleSend = (text: string) => {
    
  };

  const connectWallet = async () => {
    setOpenmodalToken(true)
    console.log ("setOpenmodalToken:", "active");
  };
  function closeModal() { 
    setOpenmodalToken(false)
    console.log("Modal closed");
  }

  const isValidAddress = (text: string) => text.startsWith('0x');

  return (
    <Background>
      <MenuHome />
      <div >
        {OpenmodalToken && <ModalToken  onClose={closeModal}/>}
      </div>
      <HeadAir style={{ backgroundImage: `url("./images/AirIcon/BackgroundAir.png")` }}>
        <Wraper>
          <img className="ImgText" src={images.IconText} />
          <Text>is coming</Text>
          <img className="ImgSBRC" src={images.IconSBRC} />
          <BoxAir>
            <Boxchat>
              {BoxChat.map((line, index) => (
                <ValueBoxchat key={index}>
                  {line}
                  {isValidAddress(line) && (
                    <IconBox>
                      <Button onClick={connectWallet}>Send</Button>
                      <Icon
                        src={images.IconCopy}
                        onClick={() => handleCopy(line)}
                      />
                    </IconBox>
                  )}
                </ValueBoxchat>
              ))}
            </Boxchat>
            <EnterChat
              type="text"
              value={UseChat}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Type the message and press enter"
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </BoxAir>
        </Wraper>
      </HeadAir>
    </Background>
  );
};

export default Airdrop;
