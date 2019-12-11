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
    backgroundColor: Colors.darkBrand,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.white
  },
  orderContainer: {
    flex: 1,
    backgroundColor: Colors.gray,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  orderTitle: {
    marginTop: 10,
    fontSize: 15
  },
  itemContainer: {
    marginTop: 5
  },
  item: {
    marginVertical: 5
  },
  submitContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  submit: {
    backgroundColor: Colors.submit,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  submitText: {
    color: Colors.white
  },
  alertContainer: {
    backgroundColor: Colors.alert,
    alignItems: "center",
    paddingVertical: 5
  },
  alertText: {
    color: Colors.white
  }
})
