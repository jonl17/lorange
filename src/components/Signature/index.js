import React from "react"
import { Container, Name, About, AboutContainer, Email } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

const GetSignature = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            jobs
            contact {
              email
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Name className="bold">{data.site.siteMetadata.title}</Name>
        <AboutContainer>
          <About>
            A Reykjavík-based web developer. For new projects contact via{" "}
            <Email
              target="_blank"
              href={"mailto:" + data.site.siteMetadata.contact.email}
            >
              e-mail.
            </Email>
          </About>
        </AboutContainer>
      </>
    )}
  ></StaticQuery>
)

const Signature = () => {
  return <Container>{GetSignature()}</Container>
}

export default Signature
