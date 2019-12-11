import { StyleSheet } from "react-native"
import { Colors, Metrics } from "../../themes";

export default StyleSheet.create({
  navContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.darkBrand
  },
  navBack: {
    width: 22,
    height: 32,
  },
  dotsBlue: {
    width: 210,
    height: 190,
  },
  dotsBlueContainer: {
    position: 'absolute',
    right: Metrics.sectionMargin / 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: "bold"
  },
  rightTitle: {
    color: Colors.white,
  }
})
