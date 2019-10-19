import React from "react"
import { Container, Text } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import List from "./components/List"

const GetSites = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(sort: { fields: frontmatter___order }) {
          edges {
            node {
              frontmatter {
                title
                about
                url
                honnun
                video {
                  publicURL
                }
                image {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={sites => <List sites={sites.allMarkdownRemark.edges}></List>}
  ></StaticQuery>
)

const Efnisyfirlit = () => {
  return (
    <>
      <Container>
        <Text>Selected works:</Text>
        {GetSites()}
      </Container>
    </>
  )
}

export default Efnisyfirlit
