import styled from "styled-components"
import { GridNames, Colors, Margins } from "../../../constants"

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 50vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50vh auto;
  grid-template-areas:
    "${GridNames.gridTop}"
    "${GridNames.gridBottom}";
  border-right: solid ${Margins.Border} ${Colors.Black};
  box-sizing: border-box;
`
