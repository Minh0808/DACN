import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  background-size: cover;
  height: 1000px;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Text = styled.div`
  color: #fff;
  font-size: 62.86px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const Title = styled.div`
  background: -webkit-linear-gradient(
    left,
    #e86e00 -1.64%,
    #f18900 3.29%,
    #f99f00 9.22%,
    #fdac00 14.15%,
    #ffb100 19.09%,
    #e86e00 97.07%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  stroke-width: 2px;
  stroke: var(--silver, #d0d2d3);
  font-size: 100px;
  font-weight: 700;
`
