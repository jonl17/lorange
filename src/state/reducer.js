import {
  SET_DEVICE,
  CHANGE_CHANNEL,
  SET_DESCRIPTION,
  SET_VIDEOZ,
  TURN_OFF,
  TURN_ON,
  VIDEO_LOADED,
} from "./action"

const initialState = {
  device: undefined,
  channel: undefined,
  description: undefined,
  videoZ: 0,
  laptopState: "off",
  videoIsLoaded: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      let device
      if (action.width <= 750) {
        device = `mobile`
      }
      if (action.width > 750 && action.width <= 1050) {
        device = `tablet`
      }
      if (action.width > 1050) {
        device = `browser`
      }
      return { ...state, device: device }
    case CHANGE_CHANNEL:
      return { ...state, channel: action.channel }
    case SET_DESCRIPTION:
      return { ...state, description: action.description }
    case SET_VIDEOZ:
      return { ...state, videoZ: action.z }
    case TURN_OFF:
      return { ...state, laptopState: "off" }
    case TURN_ON:
      return { ...state, laptopState: "on" }
    case VIDEO_LOADED:
      return { ...state, videoIsLoaded: action.loaded }
    default:
      return state
  }
}
