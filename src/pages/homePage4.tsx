import images from "../configs/images";
import {
  ColumnLeft,
  ColumnRight,
  Container,
  Img,
  Modal,
  Text,
  Title,
  Wraper,
} from "./Component/styled/pageHome4";
import { useState } from "react";
import Modal_1 from "./Component/modal/Modal_1";
import Modal_2 from "./Component/modal/Modal_2";
import Modal_3 from "./Component/modal/Modal_3";
import Modal_4 from "./Component/modal/Modal_4";

const PageHome4: React.FC = () => {
  const [Active, setActive] = useState(0);
  const [OpenModal1, setOpenModal1] = useState(false);
  const [OpenModal2, setOpenModal2] = useState(false);
  const [OpenModal3, setOpenModal3] = useState(false);
  const [OpenModal4, setOpenModal4] = useState(false);
  const [Closebox, setClosebox] = useState(true);

  const HandleActive = (_acc: any) => {
    setActive(_acc);
    setOpenModal1(true);
    setOpenModal2(false);
    setOpenModal3(false);
    setOpenModal4(false);
    setClosebox(false);
  };
  const HandleActive_2 = (_acc: any) => {
    setActive(_acc);
    setOpenModal1(false);
    setOpenModal2(true);
    setOpenModal3(false);
    setOpenModal4(false);
    setClosebox(false);
  };

  const HandleActive_3 = (_acc: any) => {
    setActive(_acc);
    setOpenModal1(false);
    setOpenModal2(false);
    setOpenModal3(true);
    setOpenModal4(false);
    setClosebox(false);
  };

  const HandleActive_4 = (_acc: any) => {
    setActive(_acc);
    setOpenModal1(false);
    setOpenModal2(false);
    setOpenModal3(false);
    setOpenModal4(true);
    setClosebox(false);
  };

  const HandleCloseModal1 = () => {
    setOpenModal1(false);
    setOpenModal2(false);
    setOpenModal3(false);
    setOpenModal4(false);
    setClosebox(true);
    setActive(0);
  };
  return (
    <Container>
      <Title>
        <img className="FAQs" src={images.FAQs} alt="FAQs" />
      </Title>

      <Wraper>
        <ColumnLeft>
          <div className="Row-1" data-aos="flip-up">
            <Img
              className={Active === 1 ? "active" : ""}
              onClick={() => HandleActive(1)}
            >
              <img
                className="IconNormal"
                src={images.IconHomePage4_1a}
                alt="IconNormal"
              />
              <img
                className="IconHover"
                src={images.IconHomePage4_1b}
                alt="IconHover"
              />
              <Text className="text">What are BRC-20 tokens?</Text>
              <img
                className="Normal"
                src={images.IconHomePage4_2a}
                alt="Normal"
              />
              <img
                className="Hover"
                src={images.IconHomePage4_2b}
                alt="Hover"
              />
              <img
                className="Normal_mobile"
                src={images.IconHomePage4_3a}
                alt="Normal_mobile"
              />
              <img
                className="Hover_mobile"
                src={images.IconHomePage4_3b}
                alt="Hover_mobile"
              />
            </Img>
          </div>
          <div className="Row-2" data-aos="flip-up">
            <Img
              className={Active === 2 ? "active" : ""}
              onClick={() => HandleActive_2(2)}
              key={1}
            >
              <img
                className="IconNormal"
                src={images.IconHomePage4_1a}
                alt="IconNormal"
              />
              <img
                className="IconHover"
                src={images.IconHomePage4_1b}
                alt="IconHover"
              />
              <Text className="text">How do you buy BRC-20 tokens?</Text>
              <img
                className="Normal"
                src={images.IconHomePage4_2a}
                alt="Normal"
              />
              <img
                className="Hover"
                src={images.IconHomePage4_2b}
                alt="Hover"
              />
              <img
                className="Normal_mobile"
                src={images.IconHomePage4_3a}
                alt="Normal_mobile"
              />
              <img
                className="Hover_mobile"
                src={images.IconHomePage4_3b}
                alt="Hover_mobile"
              />
            </Img>
          </div>
          <div className="Row-3" data-aos="flip-up">
            <Img
              className={Active === 3 ? "active" : ""}
              onClick={() => HandleActive_3(3)}
            >
              <img
                className="IconNormal"
                src={images.IconHomePage4_1a}
                alt="IconNormal"
              />
              <img
                className="IconHover"
                src={images.IconHomePage4_1b}
                alt="IconHover"
              />
              <Text className="text">How are BRC-20 tokens created?</Text>
              <img
                className="Normal"
                src={images.IconHomePage4_2a}
                alt="Normal"
              />
              <img
                className="Hover"
                src={images.IconHomePage4_2b}
                alt="Hover"
              />
              <img
                className="Normal_mobile"
                src={images.IconHomePage4_3a}
                alt="Normal_mobile"
              />
              <img
                className="Hover_mobile"
                src={images.IconHomePage4_3b}
                alt="Hover_mobile"
              />
            </Img>
          </div>
          <div className="Row-4" data-aos="flip-up">
            <Img
              className={Active === 4 ? "active" : ""}
              onClick={() => HandleActive_4(4)}
            >
              <img
                className="IconNormal"
                src={images.IconHomePage4_1a}
                alt="IconNormal"
              />
              <img
                className="IconHover"
                src={images.IconHomePage4_1b}
                alt="IconHover"
              />
              <Text className="text">
                What’s the difference between BRC-20 and ERC-20 tokens?
              </Text>
              <img
                className="Normal"
                src={images.IconHomePage4_2a}
                alt="Normal"
              />
              <img
                className="Hover"
                src={images.IconHomePage4_2b}
                alt="Hover"
              />
              <img
                className="Normal_mobile"
                src={images.IconHomePage4_3a}
                alt="Normal_mobile"
              />
              <img
                className="Hover_mobile"
                src={images.IconHomePage4_3b}
                alt="Hover_mobile"
              />
            </Img>
          </div>
        </ColumnLeft>
        <Modal className="Modal1" onClick={HandleCloseModal1} >
          {OpenModal1 && <Modal_1 onClose={HandleCloseModal1} />}
          {OpenModal2 && <Modal_2 onClose={HandleCloseModal1} />}
          {OpenModal3 && <Modal_3 onClose={HandleCloseModal1} />}
          {OpenModal4 && <Modal_4 onClose={HandleCloseModal1} />}
        </Modal>
        {Closebox && (
          <ColumnRight data-aos="fade-left">
            <Text className="text1">What are BRC-20 tokens?</Text>
            <Text className="text">
              BRC-20 tokens are built on the Bitcoin Network using the ordinals
              protocol.
            </Text>
          </ColumnRight>
        )}
      </Wraper>
    </Container>
  );
};
export default PageHome4;
