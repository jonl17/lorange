import styled from "styled-components"
import { GridNames, TVSize, Margins } from "../../../constants"
import Img from "gatsby-image"

export const Container = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: ${Margins.BrowserSmall};
  grid-area: gridfixedtop;
`
export const Image = styled(Img)`
  object-fit: contain;
  height: 100%;
`
