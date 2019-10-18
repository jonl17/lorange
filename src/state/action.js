export const SET_DEVICE = "SET_DEVICE"
export const setDevice = width => ({
  type: SET_DEVICE,
  width,
})
export const CHANGE_CHANNEL = "CHANGE_CHANNEL"
export const changeChannel = channel => ({
  type: CHANGE_CHANNEL,
  channel,
})
export const SET_DESCRIPTION = "SET_DESCRIPTION"
export const setDescription = description => ({
  type: SET_DESCRIPTION,
  description,
})
export const SET_VIDEOZ = "SET_VIDEOZ"
export const setVideoZ = z => ({
  type: SET_VIDEOZ,
  z,
})
export const TURN_ON = "TURN_ON"
export const turnOn = () => ({
  type: TURN_ON,
})
export const TURN_OFF = "TURN_OFF"
export const turnOff = () => ({
  type: TURN_OFF,
})
