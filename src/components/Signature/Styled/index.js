import styled from "styled-components"
import { GridNames, FontSizes, Margins, Colors } from "../../../constants"

export const Container = styled.div`
  grid-area: ${GridNames.LeftTopCorner};
  box-sizing: border-box;
  padding: ${Margins.BrowserSmall};
  transition: 1s ease-out;
  border-bottom: solid ${Margins.Border} ${Colors.Orange};
  border-bottom-style: dashed;
  width: 100%;
`
export const Name = styled.p`
  font-size: ${FontSizes.Title};
  margin: 0;
`
export const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Job = styled.p`
  font-size: ${FontSizes.Title};
  margin: 0;
`
