import { StyleSheet } from "react-native"
import { Colors, Metrics } from "../../themes"

export default StyleSheet.create({
  pageContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    paddingTop: Metrics.notchTop,
    backgroundColor: Colors.black
  },
  container: {
    flex: 1,
    backgroundColor: Colors.black
  },
  imageContainer: {
    flex: 1,
    paddingTop: 30
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch"
  },
  previewContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Colors.black
  },
  item: {
    marginLeft: 5
  },
  alertContainer: {
    backgroundColor: Colors.black,
    alignItems: "center",
    paddingVertical: 5
  },
  alertText: {
    color: Colors.white
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    height: 50,
  },
  upload: {
    width: 15,
    height: 20,
    resizeMode: "stretch"
  },
  detail: {
    fontSize: 15,
    textAlign: "center",
    color: Colors.white
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white
  }
})
