import React from "react"
import { Image, Container } from "./Styled"
import { connect } from "react-redux"
import { graphql, StaticQuery } from "gatsby"

const GetOrange = () => (
  <StaticQuery
    query={graphql`
      {
        imageSharp(fluid: { originalName: { eq: "orange.png" } }) {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={data => <Image fluid={data.imageSharp.fluid}></Image>}
  ></StaticQuery>
)

const Loading = ({ laptopState, videoIsLoaded }) => {
  console.log(videoIsLoaded)
  return (
    <Container loadStatus={videoIsLoaded} state={laptopState}>
      {GetOrange()}
    </Container>
  )
}

const mapStateToProps = state => ({
  laptopState: state.reducer.laptopState,
  videoIsLoaded: state.reducer.videoIsLoaded,
})

export default connect(mapStateToProps)(Loading)
