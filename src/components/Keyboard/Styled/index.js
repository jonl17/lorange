import styled from "styled-components"
import { Margins, FontSizes, Colors } from "../../../constants"

export const Container = styled.div`
  grid-area: gridfixedbottom;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: ${Margins.BrowserSmall};
  transform: skew(-20deg, 0deg) translateX(-9.5%);
  background: ${Colors.Black};
`
export const Text = styled.p`
  font-size: ${FontSizes.Paragraph};
  margin: 0;
  color: ${Colors.White} !important;
`
