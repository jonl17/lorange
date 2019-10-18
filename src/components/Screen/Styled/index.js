import styled from "styled-components"
import { GridNames, Margins } from "../../../constants"
import Img from "gatsby-image"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: ${Margins.BrowserSmall};
  grid-area: ${GridNames.gridFixedTop};
  display: grid;
  margin: auto;
  z-index: ${props => props.videoZ};
  position: relative;
`
export const Image = styled(Img)`
  object-fit: contain;
  width: 100%;
`
export const Video = styled.video`
  object-fit: contain;
  width: 100%;
  margin: auto;
`
