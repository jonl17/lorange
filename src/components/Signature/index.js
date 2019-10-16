import React from "react"
import { Container, Name, Job, JobsContainer } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

const GetSignature = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            jobs
          }
        }
      }
    `}
    render={data => (
      <>
        <Name className="bold">{data.site.siteMetadata.title}</Name>
        <JobsContainer>
          {data.site.siteMetadata.jobs.map(job => (
            <Job>+ {job}</Job>
          ))}
        </JobsContainer>
      </>
    )}
  ></StaticQuery>
)

const Signature = () => {
  return <Container>{GetSignature()}</Container>
}

export default Signature
