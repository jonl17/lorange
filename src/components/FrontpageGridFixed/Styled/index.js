import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  min-height: 100vh;
  width: 50vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50vh 50vh;
  grid-template-areas:
    "gridfixedtop"
    "gridfixedbottom";
  box-sizing: border-box;
`
