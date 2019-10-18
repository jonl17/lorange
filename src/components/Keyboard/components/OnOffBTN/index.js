import React from "react"
import { Outer, Inner } from "./Styled"
import { connect } from "react-redux"

const OnOffBTN = ({ laptopState }) => {
  return (
    <Outer>
      <Inner state={laptopState}></Inner>
    </Outer>
  )
}

const mapStateToProps = state => ({
  laptopState: state.reducer.laptopState,
})

export default connect(mapStateToProps)(OnOffBTN)
