import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../themes";

const Card = props => {
  const borderColor = props.isSelected ? Colors.cardSelected : Colors.white

  return (
    <View style={[styles.container, props.style, {borderColor}]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
  },
});

export default Card;
