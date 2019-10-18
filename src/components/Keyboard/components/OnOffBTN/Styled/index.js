import styled, { css } from "styled-components"

export const Outer = styled.div`
  position: absolute;
  background: black;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  right: 0;
`
export const Inner = styled.div`
  position: absolute;
  transition: 0.5s;
  background: gray;
  ${props =>
    props.state === `on` &&
    css`
      background: yellowgreen;
    `}
  height: 15px;
  width: 15px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  margin-top: -7.5px;
  margin-left: -7.5px;
`
