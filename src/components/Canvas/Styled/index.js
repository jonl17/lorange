import styled from "styled-components"
import { Colors } from "../../../constants"

export const Container = styled.div`
  height: 65vh;
  width: 50vw;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`
export const Ball = styled.div`
  height: 10px;
  width: 10px;
  box-shadow: 10px 20px 2px 30px ${Colors.Orange};
  background-color: green;
  border-radius: 50%;
  transition: 4s ease-in-out;
  position: absolute;
  bottom: ${props => props.position.x + "%"};
  left: ${props => props.position.y + "%"};
`
export const Ball2 = styled.div`
  height: 10px;
  width: 10px;
  box-shadow: 10px 20px 2px 30px ${Colors.Orange};
  background-color: green;
  border-radius: 50%;
  transition: 10s ease-in-out;
  position: absolute;
  bottom: ${props => props.position.x + "%"};
  left: ${props => props.position.y + "%"};
`
