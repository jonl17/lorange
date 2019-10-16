import React from "react"
import { Container, Text } from "./Styled"
import { connect } from "react-redux"

const Description = ({ description }) => {
  return (
    <Container>
      {description !== undefined ? <Text>{description}</Text> : <></>}
    </Container>
  )
}

const mapStateToProps = state => ({
  description: state.reducer.description,
})

export default connect(mapStateToProps)(Description)
