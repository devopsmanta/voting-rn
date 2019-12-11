import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

import { SVG, Colors } from "../../themes"
import styles from "./styles"

const NavigationBar = ({
  goBack,
  title,
  rightTitle,
  onRightPress,
  navigation,
  smallMode,
  fullscreen
}) => {
  return (
    <View
      style={[
        styles.navContainer,
        {
          height: smallMode ? 45 : 95,
          backgroundColor: fullscreen ? Colors.black : Colors.darkBrand
        }
      ]}
    >
      {!smallMode && (
        <View style={styles.dotsBlueContainer}>
          <SVG.DotsBlue style={styles.dotsBlue} />
        </View>
      )}
      <View
        style={[
          styles.header,
        ]}
      >
        {goBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SVG.NavBack style={styles.navBack} />
          </TouchableOpacity>
        )}
        {smallMode && (
          <TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
          </TouchableOpacity>
        )}
        {onRightPress && (
          <TouchableOpacity>
            <Text style={styles.rightTitle}>{rightTitle}</Text>
          </TouchableOpacity>
        )}
      </View>
      {!smallMode && (
        <Text style={styles.headerTitle}>Formal t-shirt design</Text>
      )}
    </View>
  )
}

export default NavigationBar
