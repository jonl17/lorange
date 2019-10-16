import React from "react"
import { Container, Ball, Ball2 } from "./Styled"

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      direction: "up",
      timer: null,
      position: {
        x: 0,
        y: 0,
      },
    }
    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    let timer = setInterval(this.tick, 3000)
    this.setState({ timer })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  tick() {
    let num = Math.floor(Math.random() * 100)
    let num2 = Math.floor(Math.random() * 100)
    console.log("x: " + num)
    console.log("y: " + num2)
    this.setState({
      position: {
        x: num,
        y: num2,
      },
    })
    console.log(num)
  }

  render() {
    return (
      <Container ref={this.canvasRef}>
        <Ball position={this.state.position}></Ball>
        <Ball2 position={this.state.position}></Ball2>
      </Container>
    )
  }
}

export default Canvas
