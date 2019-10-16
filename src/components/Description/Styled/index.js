import styled from "styled-components"
import { Margins, FontSizes } from "../../../constants"

export const Container = styled.div`
  grid-area: gridfixedbottom;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: ${Margins.BrowserSmall};
`
export const Text = styled.p`
  font-size: ${FontSizes.Paragraph};
`
