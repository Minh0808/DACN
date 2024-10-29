import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  .Title {
    height: 32px;
  }
  @media (max-width: 575px) {
    justify-content: flex-start;
    padding-top: 0px;
    position: relative;
    top: 235px;
    height: 1100px;
  }
`;
export const Modal = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 5px;
  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    padding-right: 0px;
    width: 100%;
  }
`;
export const Text = styled.div`
  font-size: 20px;
  color: white;
  width: 100%;
  font-weight: 500;
  @media (max-width: 575px) {
    font-size: 18px;
  }
`;
export const Title = styled.div`
  height: 80px;
  width: 160px;
  display: flex;
  align-items: center;
  .FAQs {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 575px) {
    font-size: 32px;
  }
`;

export const Img = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  border-radius: 12px;
  gap: 30px;
  background: #252433;
  padding: 0px 15px;
  width: 100%;
  .IconNormal {
    height: 30px;
    width: 30px;
  }

  .IconHover {
    display: none;
  }
  .Hover {
    display: none;
  }

  @media (max-width: 575px) {
    width: 89%;
    gap: 20px;
  }
`;
export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  left: 110px;
  gap: 15px;

  .Normal {
    width: 30px;
  }
  .Hover {
    width: 30px;
  }

  .Row-1 {
    width: 700px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .Normal_mobile {
      display: none;
    }
    .Hover_mobile {
      display: none;
      @media (max-width: 575px) {
        display: block;
      }
    }
    .active {
      box-shadow: 0px 0px 5px 6px #ffffff47;
      background: linear-gradient(
        90deg,
        #e86e00 -1.64%,
        #f18900 3.29%,
        #f99f00 9.22%,
        #fdac00 14.15%,
        #ffb100 19.09%,
        #e86e00 97.07%
      );
      .Hover {
        display: block;
        position: relative;
        background: none;
        box-shadow: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
      .text {
        color: white;
        background: none;
        box-shadow: none;
      }
      .IconHover {
        display: block;
        height: 30px;
        width: 30px;
        background: none;
        box-shadow: none;
      }
      .IconNormal {
        display: none;
      }
      .Normal {
        display: none;
      }
      .Normal_mobile {
        display: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
      .Hover_mobile {
        display: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
    }
    :hover {
      background: linear-gradient(
        180deg,
        #fdd65d 0.01%,
        #fdd55c 0.02%,
        #0040e8 0.03%,
        #fcd55c 0.04%,
        #fcd45c 12.68%,
        #fcb548 47.67%,
        #f99c3c 54.89%,
        #f59133 81.57%,
        #fdac00 102.48%,
        #ffb100 102.49%,
        #fa6c1d 102.5%
      );
      .text {
        color: white;
        background: none;
        box-shadow: none;
      }
      .IconHover {
        display: none;
      }
      .IconNormal {
        display: block;
        background: none;
      }

      .Normal {
        display: block;
        background: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
      .Hover {
        display: none;
      }
      .Normal_mobile {
        display: none;
        @media (max-width: 575px) {
          display: block;
        }
      }
      .Hover_mobile {
        display: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
    }
  }

  .Row-2 {
    width: 700px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .Normal_mobile {
      display: none;
    }
    .Hover_mobile {
      display: none;
      @media (max-width: 575px) {
        display: block;
      }
    }

    .active {
      box-shadow: 0px 0px 5px 6px #ffffff47;
      background: linear-gradient(
        90deg,
        #e86e00 -1.64%,
        #f18900 3.29%,
        #f99f00 9.22%,
        #fdac00 14.15%,
        #ffb100 19.09%,
        #e86e00 97.07%
      );
      .Hover {
        display: block;
        position: relative;
        background: none;
        box-shadow: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
      .text {
        color: white;
        background: none;
        box-shadow: none;
      }
      .IconHover {
        display: block;
        height: 30px;
        width: 30px;
        background: none;
        box-shadow: none;
      }
      .IconNormal {
        display: none;
      }
      .Normal {
        display: none;
      }
      .Normal_mobile {
        display: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
      .Hover_mobile {
        display: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
    }
    :hover {
      background: linear-gradient(
        180deg,
        #fdd65d 0.01%,
        #fdd55c 0.02%,
        #0040e8 0.03%,
        #fcd55c 0.04%,
        #fcd45c 12.68%,
        #fcb548 47.67%,
        #f99c3c 54.89%,
        #f59133 81.57%,
        #fdac00 102.48%,
        #ffb100 102.49%,
        #fa6c1d 102.5%
      );
      .text {
        color: white;
        background: none;
        box-shadow: none;
      }
      .IconHover {
        display: none;
      }
      .IconNormal {
        display: block;
        background: none;
      }

      .Normal {
        display: block;
        background: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
      .Hover {
        display: none;
      }
      .Normal_mobile {
        display: none;
        @media (max-width: 575px) {
          display: block;
        }
      }
      .Hover_mobile {
        display: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
    }
  }

  .Row-3 {
    width: 700px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .Normal_mobile {
      display: none;
    }
    .Hover_mobile {
      display: none;
      @media (max-width: 575px) {
        display: block;
      }
    }
    .active {
      box-shadow: 0px 0px 5px 6px #ffffff47;
      background: linear-gradient(
        90deg,
        #e86e00 -1.64%,
        #f18900 3.29%,
        #f99f00 9.22%,
        #fdac00 14.15%,
        #ffb100 19.09%,
        #e86e00 97.07%
      );
      .Hover {
        display: block;
        position: relative;
        background: none;
        box-shadow: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
      .text {
        color: white;
        background: none;
        box-shadow: none;
      }
      .IconHover {
        display: block;
        height: 30px;
        width: 30px;
        background: none;
        box-shadow: none;
      }
      .IconNormal {
        display: none;
      }
      .Normal {
        display: none;
      }
      .Normal_mobile {
        display: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
      .Hover_mobile {
        display: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
    }
    :hover {
      background: linear-gradient(
        180deg,
        #fdd65d 0.01%,
        #fdd55c 0.02%,
        #0040e8 0.03%,
        #fcd55c 0.04%,
        #fcd45c 12.68%,
        #fcb548 47.67%,
        #f99c3c 54.89%,
        #f59133 81.57%,
        #fdac00 102.48%,
        #ffb100 102.49%,
        #fa6c1d 102.5%
      );
      .text {
        color: white;
        background: none;
        box-shadow: none;
      }
      .IconHover {
        display: none;
      }
      .IconNormal {
        display: block;
        background: none;
      }

      .Normal {
        display: block;
        background: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
      .Hover {
        display: none;
      }
      .Normal_mobile {
        display: none;
        @media (max-width: 575px) {
          display: block;
        }
      }
      .Hover_mobile {
        display: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
    }
  }

  .Row-4 {
    width: 700px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .Normal_mobile {
      display: none;
    }
    .Hover_mobile {
      display: none;
      @media (max-width: 575px) {
        display: block;
      }
    }
    .active {
      box-shadow: 0px 0px 5px 6px #ffffff47;
      background: linear-gradient(
        90deg,
        #e86e00 -1.64%,
        #f18900 3.29%,
        #f99f00 9.22%,
        #fdac00 14.15%,
        #ffb100 19.09%,
        #e86e00 97.07%
      );
      .Hover {
        display: block;
        position: relative;
        background: none;
        box-shadow: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
      .text {
        color: white;
        background: none;
        box-shadow: none;
      }
      .IconHover {
        display: block;
        height: 30px;
        width: 30px;
        background: none;
        box-shadow: none;
      }
      .IconNormal {
        display: none;
      }
      .Normal {
        display: none;
      }
      .Normal_mobile {
        display: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
      .Hover_mobile {
        display: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
    }
    :hover {
      background: linear-gradient(
        180deg,
        #fdd65d 0.01%,
        #fdd55c 0.02%,
        #0040e8 0.03%,
        #fcd55c 0.04%,
        #fcd45c 12.68%,
        #fcb548 47.67%,
        #f99c3c 54.89%,
        #f59133 81.57%,
        #fdac00 102.48%,
        #ffb100 102.49%,
        #fa6c1d 102.5%
      );
      .text {
        color: white;
        background: none;
        box-shadow: none;
      }
      .IconHover {
        display: none;
      }
      .IconNormal {
        display: block;
        background: none;
      }

      .Normal {
        display: block;
        background: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
      .Hover {
        display: none;
      }
      .Normal_mobile {
        display: none;
        @media (max-width: 575px) {
          display: block;
        }
      }
      .Hover_mobile {
        display: none;
        @media (max-width: 575px) {
          display: none;
        }
      }
    }
  }
  @media (max-width: 575px) {
    width: 100%;
    left: 0px;

    .Row-1 {
      width: 100%;
      justify-content: center;
      .Normal {
        display: none;
      }
      .Hover {
        display: none;
      }
      :hover {
        background: linear-gradient(
          90deg,
          #e86e00 -1.64%,
          #f18900 3.29%,
          #f99f00 9.22%,
          #fdac00 14.15%,
          #ffb100 19.09%,
          #e86e00 97.07%
        );
      }
    }
    .Row-2 {
      .Normal {
        display: none;
      }
      .Hover {
        display: none;
      }
      width: 100%;
      justify-content: center;
      position: relative;
      top: 215px;
      :hover {
        background: linear-gradient(
          90deg,
          #e86e00 -1.64%,
          #f18900 3.29%,
          #f99f00 9.22%,
          #fdac00 14.15%,
          #ffb100 19.09%,
          #e86e00 97.07%
        );
      }
    }
    .Row-3 {
      .Normal {
        display: none;
      }
      .Hover {
        display: none;
      }
      width: 100%;
      justify-content: center;
      position: relative;
      top: 210px;
      :hover {
        background: linear-gradient(
          90deg,
          #e86e00 -1.64%,
          #f18900 3.29%,
          #f99f00 9.22%,
          #fdac00 14.15%,
          #ffb100 19.09%,
          #e86e00 97.07%
        );
      }
    }
    .Row-4 {
      .Normal {
        display: none;
      }
      .Hover {
        display: none;
      }
      width: 100%;
      justify-content: center;
      position: relative;
      top: 205px;
      :hover {
        background: linear-gradient(
          90deg,
          #e86e00 -1.64%,
          #f18900 3.29%,
          #f99f00 9.22%,
          #fdac00 14.15%,
          #ffb100 19.09%,
          #e86e00 97.07%
        );
      }
    }
  }
`;
export const ColumnRight = styled.div`
  width: 700px;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  justify-content: center;
  gap: 30px;
  padding: 0px 175px;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 6px #9ca3af;
  .text1 {
    font-size: 26px;
    font-weight: 600;
    @media (max-width: 575px) {
      font-size: 26px;
    }
  }
  .text {
    font-weight: 400;
    color: #9e9e9e;
  }
  @media (max-width: 575px) {
    width: 100%;
    padding: 0px;
    height: 150px;
    text-align: center;
    display: none;
  }
`;
