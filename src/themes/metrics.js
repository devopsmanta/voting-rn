import { Dimensions, Platform } from "react-native"
import Constants from 'expo-constants'

let { width, height } = Dimensions.get("window")
const X_WIDTH = 375
const X_HEIGHT = 812
const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

let isIPhoneX = (() => {
  if (Platform.OS === "web") {
    return false
  }
  return (
    (Platform.OS === "ios" &&
      ((width === X_WIDTH && height === X_HEIGHT) ||
        (width === X_HEIGHT && height === X_WIDTH))) ||
    (width === XSMAX_WIDTH && height === XSMAX_HEIGHT) ||
    (width === XSMAX_HEIGHT && height === XSMAX_WIDTH)
  )
})()

const metrics = {
  notchTop: Constants.statusBarHeight,
  notchBottom: isIPhoneX ? 15 : 0,
  sectionMargin: 40,
  screenWidth: width < height ? width : height,
  screenHeight:
    width < height
      ? height - (isIPhoneX ? 34 : 0)
      : width - (isIPhoneX ? 34 : 0),
  smallImageWidth: Math.ceil((width) / 14.0)
}

export default metrics
