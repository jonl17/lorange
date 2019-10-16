import styled from "styled-components"
import { GridNames, Margins, Colors } from "../../../constants"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  grid-area: ${GridNames.LeftBottomCorner};
  box-sizing: border-box;
  padding: 0 ${Margins.BrowserSmall} 0 ${Margins.BrowserSmall};
  overflow-y: scroll;
  ::-webkit-scrollbar-thumb {
    background: ${Colors.Black};
  }
  ::-webkit-scrollbar {
    width: ${Margins.BrowserSmall};
  }
`
