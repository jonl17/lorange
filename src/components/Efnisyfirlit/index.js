import React from "react"
import { Container } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import List from "./components/List"

const GetSites = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                about
                url
                image {
                  childImageSharp {
                    fluid {
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
  return <Container>{GetSites()}</Container>
}

export default Efnisyfirlit
