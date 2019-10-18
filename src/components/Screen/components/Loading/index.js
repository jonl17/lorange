import React from "react"
import { Spinner, Container } from "./Styled"
import { connect } from "react-redux"

const Loading = ({ laptopState, videoIsLoaded }) => {
  console.log(videoIsLoaded)
  return (
    <Container loadStatus={videoIsLoaded} state={laptopState}>
      <Spinner></Spinner>
    </Container>
  )
}

const mapStateToProps = state => ({
  laptopState: state.reducer.laptopState,
  videoIsLoaded: state.reducer.videoIsLoaded,
})

export default connect(mapStateToProps)(Loading)
