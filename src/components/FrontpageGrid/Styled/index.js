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
  box-sizing: border-box;
  background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
  background-blend-mode: screen;
`
