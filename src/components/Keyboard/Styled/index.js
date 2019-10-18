import styled from "styled-components"
import { Margins, FontSizes, Colors } from "../../../constants"

export const Container = styled.div`
  grid-area: gridfixedbottom;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: ${Margins.BrowserSmall};
  transform: skew(-15deg, 0deg) translateX(-6.5%);
  background: ${Colors.Black};
`
export const Text = styled.p`
  font-size: ${FontSizes.Paragraph};
  margin: 0;
  color: ${Colors.White} !important;
  width: 80%;
  margin: auto;
`
