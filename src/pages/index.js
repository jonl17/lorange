import React from "react"
import FrontpageGrid from "../components/FrontpageGrid"
import FrontpageGridFixed from "../components/FrontpageGridFixed"
import Efnisyfirlit from "../components/Efnisyfirlit"
import TV from "../components/TV"
import Signature from "../components/Signature"
import Description from "../components/Description"

export default () => (
  <>
    <FrontpageGrid>
      <Signature></Signature>
      <Efnisyfirlit></Efnisyfirlit>
    </FrontpageGrid>
    <FrontpageGridFixed>
      <TV></TV>
      <Description></Description>
    </FrontpageGridFixed>
  </>
)
