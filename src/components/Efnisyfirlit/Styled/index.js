import styled from "styled-components"
import { GridNames, Margins, Colors, FontSizes } from "../../../constants"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  grid-area: ${GridNames.LeftBottomCorner};
  box-sizing: border-box;
  padding: 0 ${Margins.BrowserSmall} 0 ${Margins.BrowserSmall};
  ::-webkit-scrollbar-thumb {
    background: ${Colors.Black};
  }
  ::-webkit-scrollbar {
    width: ${Margins.BrowserSmall};
  }
`
export const Text = styled.p`
  font-size: ${FontSizes.Paragraph};
`
