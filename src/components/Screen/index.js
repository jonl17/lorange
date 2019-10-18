import React from "react"
import { Container, Video } from "./Styled"
import { connect } from "react-redux"
import { videoLoaded } from "../../state/action"
import Loading from "./components/Loading"

class Screen extends React.Component {
  render() {
    const { videoZ, channel, dispatch } = this.props
    return (
      <Container videoZ={videoZ}>
        <Loading></Loading>
        {channel !== undefined ? (
          //  <Image fluid={channel.childImageSharp.fluid}></Image>
          <Video
            onCanPlayThrough={() => dispatch(videoLoaded("loaded"))}
            loop
            autoPlay
            muted
            src={channel.publicURL}
          ></Video>
        ) : (
          <></>
        )}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  channel: state.reducer.channel,
  videoZ: state.reducer.videoZ,
})

export default connect(mapStateToProps)(Screen)
