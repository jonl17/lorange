import styled from "styled-components"
import { Margins, FontSizes, Colors } from "../../../constants"

export const Container = styled.div`
  grid-area: gridfixedbottom;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: ${Margins.BrowserSmall};
  transform: skew(-20deg, 0deg) translateX(-80px);
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
`
export const Text = styled.p`
  font-size: ${FontSizes.Paragraph};
  margin: 0;
  color: ${Colors.White} !important;
`
