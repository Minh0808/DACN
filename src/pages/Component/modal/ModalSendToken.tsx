import { Act, BoxSendToken, Close, Column, Connect, Information, Input, Left,Right,Send,Text } from "./styledModal"
import React,{ useState, useEffect } from "react"
import { ethers} from "ethers";
const ModalSendToken: React.FC <{ onClose: () => void }> = ({ onClose }) =>{

    const [OpenSendToken, setOpenmodalToken] = useState(false)
    const [accountGB, setAccount] =  useState('')
    const [NameToken, setNameToken] = useState('')
    const [tokenBalance, setTokenBalance] = useState('')
    const [tokenDecimal, setTokenDecimal] = useState(0)
    const [ID, setID] = useState('')
    const [sendAmount, setSendAmount] = useState('0')

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
            console.error("Vui long caif dat metamask:", error);
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

      useEffect(() => {
        getTokenInfo()
      }, [])


      const IDwallet = "0x4DE70A420e5d6da282820745134dc0990126Bd2d"
      
      const send = async () => {
        try {
            const signerData = await getSigner();
            
            if (!signerData) {
                throw new Error("Không thể lấy signer data. Vui lòng kiểm tra lại.");
            }
    
            // Danh sách các địa chỉ ví không hợp lệ (có thể bổ sung thêm)
            // const invalidAddresses = [""];
    
            // // Kiểm tra nếu địa chỉ ví thuộc danh sách không hợp lệ
            // if (invalidAddresses.includes(ID)) {
            //     alert("Địa chỉ ví không hợp lệ. Không thể gửi token đến ID Wallet của chính mình.");
            //     console.error("Không thể gửi token đến địa chỉ ví được xác định trước.");
            //     return;
            // }
    
            // Kiểm tra nếu số lượng token là số âm
            const sendAmountNumber = parseFloat(sendAmount);
            if (isNaN(sendAmountNumber) || sendAmountNumber <= 0) {
                alert("Please enter the amount of Tokens to transfer");
                console.error("Số lượng token không hợp lệ.");
            return;
            }
        
            // Định nghĩa và phân tích số lượng token, mỗi token có 18 chữ số thập phân
            const amount = ethers.parseUnits(sendAmount.toString(), tokenDecimal);
    
            // Khởi tạo contract token
            const tokenContract = new ethers.Contract(tokenAddress, ABI, signerData.signer);
    
            // Thực hiện giao dịch chuyển token đến địa chỉ đích
            const tx = await tokenContract.transfer(IDwallet, amount);
            alert("Waiting for transaction to complete");
            console.log("Đang chờ giao dịch hoàn tất...");
            
            try {
                await tx.wait();
                alert("Successful transaction");
                console.log("Giao dịch thành công!");
            } catch (txError) {
                alert("transaction failed. Cancel.");
                console.error("Giao dịch thất bại:", txError);
            }
        } catch (txError) {
            alert("transaction failed. Cancel.");
            console.error("Giao dịch thất bại:", txError);
        }
    };
    
    return(
        <BoxSendToken>
            <Information>
                <Left>
                    <Text>Address:</Text>
                    <Text>Balance:</Text>
                </Left>
                <Right>
                <Input type="text" onChange={(e) => setID(e.target.value)} value={IDwallet}/>
                <Input type="number" name="fname" onChange={(e) => setSendAmount(e.target.value)} min={0} value={sendAmount}/>
                </Right>
            </Information>
            <Act>
                <Column onClick={send}>
                    <Send/>
                    <div>Send</div>
                </Column>
                <Column onClick={onClose}>
                    <Close/>
                    <div>Close</div>
                </Column>
            </Act>
        </BoxSendToken>
    )
}
export default  ModalSendToken;
