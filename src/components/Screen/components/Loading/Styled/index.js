import styled, { keyframes, css } from "styled-components"
import { Colors } from "../../../../../constants"

export const Container = styled.div`
  height: 35px;
  width: 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -17.5px;
  margin-left: -17.5px;
  display: none;
  ${props =>
    props.state === `on` &&
    props.loadStatus !== `loaded` &&
    css`
      display: block;
    `}
`

const spin = keyframes`
    0% {
        transform: rotate(0deg);
        background: white;
    }
    25% {
        transform: rotate(90deg);
        background: yellow;
    }
    50% {
        transform: rotate(180deg);
        background: ${Colors.Orange};
    }
    75% {
        transform: rotate(240deg);
        background:  ${Colors.OrangeLight};
    }
    100% {
        transform: rotate(360deg);
        background: white;
    }
`
export const Spinner = styled.div`
  height: 100%;
  border-radius: 20px;
  width: 100%;
  background: white;
  animation: ${spin} 0.6s linear infinite;
  transition: 1s;
  box-shadow: 1px 1px 1px 1px lightblue;
`
