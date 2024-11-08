import { Act, BoxSendToken, Close, Column, Connect, Information, Input, Left,Right,Send,Text } from "./styledModal"

const ModalSendToken: React.FC <{ onClose: () => void }> = ({ onClose }) =>{

    

    return(
        <BoxSendToken>
            <Information>
                <Left>
                    <Text>Address:</Text>
                    <Text>Token:</Text>
                    <Text>Balance:</Text>
                </Left>
                <Right>
                    <Input type="text" name="fname" placeholder="receiving address"/>
                    <Input type="text" name="fname" placeholder="NameToken"/>
                    <Input type="text" name="fname" placeholder="Quantity"/>
                </Right>
            </Information>
            <Act>
                <Column>
                    <Connect/>
                    <div>Connect Wallet</div>
                </Column>
                <Column >
                    <Send/>
                    <div>Gửi</div>
                </Column>
                <Column >
                    <Close onClick={onClose}/>
                    <div>Đóng</div>
                </Column>
            </Act>
        </BoxSendToken>
    )
}
export default  ModalSendToken;
