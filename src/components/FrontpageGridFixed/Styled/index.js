import styled from "styled-components"
import { GridNames, Colors } from "../../../constants"

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  min-height: 100vh;
  width: 50vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 65vh 50vh;
  grid-template-areas:
  "${GridNames.gridFixedTop}"
  "${GridNames.gridFixedBottom}";
  box-sizing: border-box;
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
`
