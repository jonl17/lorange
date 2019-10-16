import styled from "styled-components"
import { Colors, FontSizes } from "../../../../../constants"

export const Listi = styled.ul`
  list-style: none;
  padding: 0;
`
export const Item = styled.li``
export const Text = styled.p`
  font-size: ${FontSizes.Title};
  margin: 0;
  display: inline-block;
  &&:hover {
    cursor: crosshair;
    color: ${Colors.Orange};
    font-style: italic;
  }
`
