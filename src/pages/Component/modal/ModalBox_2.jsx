import styled from "styled-components"
import { ImagesTool } from "../styled/tokenomic";
import { ProgressBar } from "react-bootstrap";
import images from "../../../configs/images";

const ModalContainer =styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    .IMGtool2 {
        width: 19px;
        height: 14px;
        position: relative;
        left: 159px;
      }
    .ProgressBar2 {
        width: 100%;
        height: 10px;
        border: 1px solid #cacad8;
        border-radius: 0px;
      }
      .one {
        width: 20%;
      }
      .two {
        width: 100%;
      }
      .three {
        width: 100%;
      }
      .for {
        width: 100%;
      }
      .from{
        width: 20%;
      }
      
`
const Row =styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: space-between;
    width: 100%;
    @media only screen and (max-width: 390px) and (orientation: portrait){
      flex-direction: column;
      gap: 20px
    }
`
const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  .address {
    color: #979797;
  }
  @media only screen and (max-width: 390px) and (orientation: portrait){
      gap: 5px;
    }
`;
const ModalBox_2 = () => {
    return (
        
        <ModalContainer>
            <Row className="RowBox2">
              <Column className="one">
              Number
                <div>#53000053</div>
              </Column>
              <Column className="two">
              Method
                <div className="address">inscribe-transfer</div>
              </Column>
              <Column className="three">
              Quantity
                <div>
                500.000.000.000
                </div>
              </Column>
              <Column className="for">
              Balance
                <div>4.200.000.000.000.000</div>
              </Column>
              <Column className="from">
              From
              <div>0</div>
              </Column>
              <Column>To
                <div className="address">bc1qq...cn9kh</div>
              </Column>
              <Column>
              Date Time
                <div>02/01/2024 23:10:09</div>
              </Column>
            </Row>
        </ModalContainer>
    )
}
export default ModalBox_2