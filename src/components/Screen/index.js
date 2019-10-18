import React from "react"
import { Container, Video } from "./Styled"
import { connect } from "react-redux"

class Screen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { videoZ, channel } = this.props

    return (
      <Container videoZ={videoZ}>
        {channel !== undefined ? (
          //  <Image fluid={channel.childImageSharp.fluid}></Image>
          <Video
            onCanPlayThrough={() => console.log("loaded")}
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
