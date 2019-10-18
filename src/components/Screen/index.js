import React from "react"
import { Container, Video } from "./Styled"
import { connect } from "react-redux"

const Screen = ({ channel, videoZ }) => {
  return (
    <Container videoZ={videoZ}>
      {channel !== undefined ? (
        //  <Image fluid={channel.childImageSharp.fluid}></Image>
        <Video loop autoPlay muted src={channel.publicURL}></Video>
      ) : (
        <></>
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  channel: state.reducer.channel,
  videoZ: state.reducer.videoZ,
})

export default connect(mapStateToProps)(Screen)
