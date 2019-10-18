import styled, { keyframes, css } from "styled-components"
import Img from "gatsby-image"

const spinner = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Container = styled.div`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -25px;
  display: none;
  ${props =>
    props.state === `on` &&
    props.loadStatus !== `loaded` &&
    css`
      display: block;
    `}
`
export const Image = styled(Img)`
  animation: ${spinner} 1.5s ease 0s infinite;
`
