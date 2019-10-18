import React from "react"
import { Container, Text } from "./Styled"
import { connect } from "react-redux"
import OnOffBTN from "./components/OnOffBTN"

const Keyboard = ({ description }) => {
  return (
    <Container>
      <OnOffBTN></OnOffBTN>
      {description !== undefined ? (
        <>
          <Text>{description.about}</Text>
          {description.honnun !== null ? (
            <Text>Design: {description.honnun}</Text>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  description: state.reducer.description,
})

export default connect(mapStateToProps)(Keyboard)
