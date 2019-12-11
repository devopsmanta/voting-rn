import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from "react-native"

import ImageViewer from "react-native-image-zoom-viewer"
import SwipeablePanel from "rn-swipeable-panel"

import ItemPreviewCarousel from "../../components/ItemPreviewCarousel"
import { NavigationBar } from "../../components"
import styles from "./styles"

const ItemDetailScreen = ({ navigation }) => {
  const [swipeablePanelActive, setSwipeablePanelActive] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(
    navigation.getParam("orderIndex", 1) - 1
  )

  votes = useSelector(state => state.voting.votes)

  useEffect(() => {
    setSwipeablePanelActive(true)
  }, [])

  const onSlideChangeHandler = slideIndex => {
    setCurrentSlide(slideIndex)
  }

  const closePanel = () => {
    setSwipeablePanelActive(false)
  }

  const images = votes.map(item => {
    return {
      url: item.url
    }
  })

  return (
    <View style={styles.pageContainer}>
      <SafeAreaView style={styles.container}>
        <NavigationBar
          navigation={navigation}
          goBack
          fullscreen
          smallMode
          title="Formal t-shirt design"
          onRightPress={() => {}}
          rightTitle="Done"
        />
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>What shirt should we order?</Text>
        </View>
        <View style={styles.imageContainer}>
          <ImageViewer
            imageUrls={images}
            renderIndicator={() => null}
            index={currentSlide}
            onChange={index => onSlideChangeHandler(index)}
          />
          {/*           
          <Image
            style={styles.image}
            source={{
              uri: data[currentSlide].uri
            }}
          ></Image> */}
        </View>
        <View style={styles.previewContainer}>
          <ItemPreviewCarousel
            onSlideChange={onSlideChangeHandler}
            initSlide={currentSlide}
          />
          <View style={styles.detailContainer}>
            <TouchableOpacity>
              <Image
                style={styles.upload}
                source={{
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-cIrDAddLQXqAqRF9xkIgl2EclFPL8q0xTH3Bdr1Lps-fQMMC"
                }}
              />
            </TouchableOpacity>
            <View style={{width: '80%'}}>
              <Text style={styles.detail}>{votes[currentSlide].title}</Text>
              <Text style={styles.detail}>${votes[currentSlide].id}</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.circle} />
            </TouchableOpacity>
          </View>
        </View>
        <SwipeablePanel
          fullWidth
          isActive={swipeablePanelActive}
          onClose={closePanel}
          openLarge={true}
          closeOnTouchOutside
          bounceAnimation
          onPressCloseButton={closePanel}
        >
          <Text>lorenIpdsdslfjas;df
          asdaklj
          asdfk
          sdfklj
          dsflkj
          sdfakl
          dfaskl
          dakjl</Text>
        </SwipeablePanel>
      </SafeAreaView>
    </View>
  )
}
export default ItemDetailScreen
