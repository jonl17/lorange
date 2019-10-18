import React from "react"
import { Listi, Item, Text } from "./Styled"
import { connect } from "react-redux"
import {
  changeChannel,
  setDescription,
  setVideoZ,
  turnOn,
  turnOff,
  videoLoaded,
} from "../../../../state/action"

class List extends React.Component {
  hovering(item) {
    this.props.dispatch(changeChannel(item.video))
    this.props.dispatch(setDescription(item))
    this.props.dispatch(setVideoZ(2))
    this.props.dispatch(turnOn())
  }
  antiHovering() {
    this.props.dispatch(setVideoZ(0))
    this.props.dispatch(changeChannel(undefined))
    this.props.dispatch(setDescription(undefined))
    this.props.dispatch(turnOff())
    this.props.dispatch(videoLoaded(undefined))
  }
  render() {
    const { sites } = this.props
    return (
      <>
        <Listi>
          {sites.map((site, index) => (
            <Item key={index}>
              <Text
                onMouseOver={() => this.hovering(site.node.frontmatter)}
                onMouseLeave={() => this.antiHovering()}
              >
                {site.node.frontmatter.title}
              </Text>
            </Item>
          ))}
        </Listi>
      </>
    )
  }
}

export default connect()(List)
