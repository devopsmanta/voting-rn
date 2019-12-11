import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native"

import { Metrics } from "../themes"

const ItemPreviewCarousel = ({ onSlideChange, initSlide }) => {
  let scrollView
  const [currentSlide, setCurrentSlide] = useState(initSlide)
  // const onClickSlide = async slideIndex => {
  //   await props.onSnapToItem(slideIndex)
  //   _carousel.snapToItem(slideIndex)
  // }

  const votes = useSelector(state => state.voting.votes)

  const onClickSlide = slideIndex => {
    if (slideIndex < 0) {
      slideIndex = 0;
    }
    else if (slideIndex >= votes.length) {
      slideIndex = votes.length - 1
    }
    setCurrentSlide(slideIndex)
    onSlideChange(slideIndex)
    scrollView.scrollTo({
      x: Metrics.smallImageWidth * slideIndex,
      y: 0,
      animated: true
    })
  }

  useEffect(() => {
    onClickSlide(initSlide)
  }, [initSlide])

  const _renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback onPress={() => onClickSlide(index)}>
        <Image style={styles.image} source={{ uri: item.uri }} />
      </TouchableWithoutFeedback>
    )
  }

  const onScrollStart = event => {
    setCurrentSlide(-1)
  }

  const onScrollHandler = event => {
    console.log(event.nativeEvent.contentOffset.x)
    onClickSlide(
      Math.ceil(event.nativeEvent.contentOffset.x / Metrics.smallImageWidth)
    )
    //setCurrentSlide(Math.ceil(event.nativeEvent.contentOffset.x / (Metrics.smallImageWidth + 4)))
    // console.log(event.nativeEvent.contentOffset.x)
    // console.log('width', Metrics.smallImageWidth + 4)
  }

  return (
    // <Carousel
    //   ref={c => {
    //     _carousel = c;
    //   }}
    //   data={data}
    //   renderItem={_renderItem}
    //   sliderWidth={414 - 30}
    //   itemWidth={53}
    //   //inactiveSlideScale={1}
    //   onSnapToItem={props.onSnapToItem}
    //   firstItem={props.initSelect}
    // />
    <ScrollView
      ref={ref => (scrollView = ref)}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate={0}
      snapToInterval={Metrics.smallImageWidth}
      snapToAlignment={"center"}
      pagingEnabled
      // scrollEventThrottle={16}
      onScrollEndDrag={onScrollHandler}
      onScrollBeginDrag={onScrollStart}
    >
      <View
        style={
          (styles.image,
          {
            width: (Metrics.screenWidth - Metrics.smallImageWidth * 3) / 2
          })
        }
      />

      {votes.map((item, index) => (
        <TouchableOpacity
          onPress={() => onClickSlide(index)}
          key={`image${index}`}
        >
          <Image
            style={index === currentSlide ? styles.imageSelected : styles.image}
            source={{ uri: item.thumbnailUrl }}
          />
        </TouchableOpacity>
      ))}
      <View
        style={
          (styles.image,
          {
            width: (Metrics.screenWidth - Metrics.smallImageWidth * 3) / 2
          })
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: Metrics.smallImageWidth - 2,
    height: 50,
    borderRadius: 2,
    marginHorizontal: 1
  },
  imageSelected: {
    width: Metrics.smallImageWidth * 2 - 2,
    height: 50,
    borderRadius: 2,
    marginHorizontal: 1
  }
})

export default ItemPreviewCarousel
