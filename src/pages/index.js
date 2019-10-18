import React from "react"
import FrontpageGrid from "../components/FrontpageGrid"
import FrontpageGridFixed from "../components/FrontpageGridFixed"
import Efnisyfirlit from "../components/Efnisyfirlit"
import Screen from "../components/Screen"
import Signature from "../components/Signature"
import Keyboard from "../components/Keyboard"

export default () => (
  <>
    <FrontpageGrid>
      <Signature></Signature>
      <Efnisyfirlit></Efnisyfirlit>
    </FrontpageGrid>
    <FrontpageGridFixed>
      <Screen></Screen>
      <Keyboard></Keyboard>
    </FrontpageGridFixed>
  </>
)
