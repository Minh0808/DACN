import { ModalContainer_Token,Information,Text,Input,Left,Right, Close,Act,Connect,Sell,Send,Column, BoxSendToken } from "./styledModal"
import React,{ useState, useEffect } from "react"
import { ethers} from "ethers";
import ModalSendToken from "./ModalSendToken";
  const ModalToken: React.FC <{ onClose: () => void }> = ({ onClose }) => {

    const [OpenSendToken, setOpenmodalToken] = useState(false)
    const [accountGB, setAccount] =  useState('')
    const [NameToken, setNameToken] = useState('')
    const [tokenBalance, setTokenBalance] = useState('')
    const [tokenDecimal, setTokenDecimal] = useState(0)
    const [ID, setID] = useState('')
    const [sendAmount, setSendAmount] = useState('0')
    const [NumberToken, setNumberToken] = useState('')

    const tokenAddress = '0xA9Bf85463936F1EA7038bA4cFDeB2E71b001ff2d'
        const ABI = '[{"inputs":[{"internalType":"address","name":"feeReceiver_","type":"address"},{"internalType":"address","name":"router_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableTrading","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"isSkip","type":"bool"}],"name":"setSkiptax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"skipTax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
    const CloseSendToken = () =>{
      setOpenmodalToken(false)
    }
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
            console.error("Please install metamask!", error);
          }
        } else {
          console.error("Ethereum provider is not available");
        }
        
    }
    
    const getTokenInfo = async () => {
        

        const signerData = await getSigner()
        if(signerData) {
        const tokenContract = new ethers.Contract( tokenAddress , ABI , signerData.signer )
        const symbol = await tokenContract.symbol()
        setNameToken(symbol)
        console.log(symbol)
        const name = await tokenContract.name()
        console.log(name)
        const decimal = await tokenContract.decimals()
        setTokenDecimal(decimal)
        const balance = await tokenContract.balanceOf(signerData.account)
        const formattedBalance = ethers.formatUnits(balance.toString(), decimal)
        setTokenBalance(formattedBalance)
        console.log(`Balance: ${ethers.formatUnits(balance.toString(), decimal)}`)
        // tokenContract.balanceOf(signerData.account).then(rs => console.log(ethers.formatUnits(rs.toString(), decimal)))
      }
    }

      // useEffect(() => {
      //   getTokenInfo()
      // }, [])

      const BoxsenToken =  () => {
        setOpenmodalToken(true)
        console.log("sendToken:", "active")
      }

      const IDwallet = "0x4DE70A420e5d6da282820745134dc0990126Bd2d"
      
      const send = async () => {
        const signerData = await getSigner()
        if(signerData) {
          // Define and parse token amount. Each token has 18 decimal places. In this example we will send 1 LINK token
          const amount = ethers.parseUnits(sendAmount.toString(), tokenDecimal)
          const tokenContract = new ethers.Contract( tokenAddress , ABI , signerData.signer )

          //Define tx and transfer token amount to the destination address
          const tx = await tokenContract.transfer(IDwallet, amount);
          await tx.wait()
      }
    }
      
      
    return (
        
        <ModalContainer_Token>
            <Information>
                <Left>
                    <Text>Address:</Text>
                    <Text>Token:</Text>
                    <Text>Balance:</Text>
                </Left>
                <Right>
                    <Input type="text"  value={accountGB} readOnly/>
                    <Input type="text"  value={NameToken} readOnly/>
                    <Input type="text" value={tokenBalance} readOnly/>
                </Right>
            </Information>
            
            <Act>
                <Column onClick={getTokenInfo}>
                    <Connect/>
                    <div>Connect Wallet</div>
                </Column>
                <Column  onClick={BoxsenToken}>
                    <Send/>
                    <div>Transaction</div>
                </Column>
                <Column >
                    <Close onClick={onClose}/>
                    <div>Close</div>
                </Column>
            </Act>
            <div>
              {OpenSendToken && < ModalSendToken onClose={CloseSendToken}/>} 
            </div>
        </ModalContainer_Token>
    )
}
export default ModalToken