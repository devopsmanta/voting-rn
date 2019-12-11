import React from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import RadioButton from "react-native-radio-button"

import Card from "./common/Card"
import { Colors } from "../themes"

const OrderItem = props => {
  const onClickOrderItemHandle = () => {
    props.onClickOrderItem(props.id)
  }
  return (
    <TouchableOpacity onPress={onClickOrderItemHandle}>
      <Card
        style={{ ...styles.designContainer, ...props.style }}
        isSelected={props.isSelected}
      >
        <Image style={styles.image} source={props.source}></Image>
        <View style={styles.detailContainer}>
          <View style={{flex: 5}}>
            <Text>{props.title}</Text>
            <Text style={styles.price}>${props.price}</Text>
          </View>
          <View style={{flex: 1}}>
            <RadioButton
              outColor={"darkBlue"}
              animation={"bounceIn"}
              isSelected={props.isSelected}
              size={15}
              onPress={onClickOrderItemHandle}
            />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 67,
    height: 67,
    borderRadius: 10
  },
  designContainer: {
    flexDirection: "row"
  },
  detailContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 15
  },
  price: {
    color: Colors.price
  }
})

export default OrderItem
