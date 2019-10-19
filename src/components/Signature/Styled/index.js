import styled from "styled-components"
import { GridNames, FontSizes, Margins, Colors } from "../../../constants"

export const Container = styled.div`
  grid-area: ${GridNames.LeftTopCorner};
  box-sizing: border-box;
  padding: ${Margins.BrowserSmall};
  transition: 1s ease-out;
  width: 100%;
`
export const Name = styled.p`
  font-size: ${FontSizes.Title};
  margin: 0;
`
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const About = styled.p`
  font-size: ${FontSizes.Paragraph};
  margin: 0;
`
export const Email = styled.a``
