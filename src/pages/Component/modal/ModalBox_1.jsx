import styled from "styled-components"
import { ModalContainer_1,Text } from "./styledModal"
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
        width: 85%;
      }
      .three {
        width: 80%;
      }
      .for {
        width: 70%;
        position: relative;
        left: 4%;
      }
      .Back {
        width: 30px;
      }
      .Next {
        width: 30px;
      }
`
const Row =styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: space-between;
    width: 100%;
`
const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  .address {
    color: blue;
  }
  
`;
const ModalBox_1 = () => {
    return (
        
        <ModalContainer>
            <Row className="RowBox2">
              <Column className="one">
                Rank
                <div>1</div>
              </Column>
              <Column className="two">
                Address
                <div className="address">bc1qq...cn9kh</div>
              </Column>
              <Column className="three">
                Percentage
                <div>
                  <ImagesTool className="IMGtool2" src={images.IconTool} />
                  <ProgressBar
                    className="ProgressBar2"
                    striped
                    variant="warning"
                    animated
                    now={55}
                  />
                </div>
              </Column>
              <Column className="for">
                Value
                <div>4.200.000.000.000.000</div>
              </Column>
            </Row>
        </ModalContainer>
    )
}
export default ModalBox_1