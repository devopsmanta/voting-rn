import React from "react"
import { View, StatusBar } from "react-native"

import AppNavigator from "./AppNavigator"

import styles from "./styles"

const RootContainer = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <AppNavigator />
    </View>
  )
}

export default RootContainer
