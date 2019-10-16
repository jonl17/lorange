import React from "react"
import { Container, Image } from "./Styled"
import { connect } from "react-redux"

const TV = ({ channel }) => {
  console.log(channel)
  return (
    <Container>
      {channel !== undefined ? (
        <Image fluid={channel.childImageSharp.fluid}></Image>
      ) : (
        <></>
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  channel: state.reducer.channel,
})

export default connect(mapStateToProps)(TV)
