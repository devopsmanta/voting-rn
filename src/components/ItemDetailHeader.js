import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { Colors } from "../themes";

const Header = props => {
  return (
    <View style={{ ...props.style, ...styles.header }}>
      <View style={styles.headerTitleContainer}>
        <TouchableWithoutFeedback>
          <Text style={styles.back}>&lt;</Text>
        </TouchableWithoutFeedback>
        <Text style={styles.headerTitle}>Formal t-shirt design</Text>
        <TouchableOpacity>
          <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 30
  },
  headerTitleContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  back: {
    width: 10,
    color: Colors.white,
    fontSize: 25,
    fontWeight: "bold"
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: "bold"
  },
  done: {
    color: Colors.white
  }
});

export default Header;
