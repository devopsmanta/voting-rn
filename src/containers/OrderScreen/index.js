import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator
} from "react-native"

import { NavigationBar } from "../../components"
import OrderItem from "../../components/OrderItem"
import api from "../../api"
import { fetchVotes } from "../../redux/actions"
import styles from "./styles"

const OrderScreen = ({ navigation }) => {
  const [currentOrder, setCurrentOrder] = useState(-1)

  const isFetching = useSelector(state => state.voting.isFetching)
  const page = useSelector(state => state.voting.page)
  const votes = useSelector(state => state.voting.votes)
  const dispatch = useDispatch()

  useEffect(() => {
    _fetchVotes()
  }, [])

  const _fetchVotes = () => {
    dispatch(fetchVotes(api.voting.fetchVotes(page)))
  }
  const onClickOrderItemHandler = clickIndex => {
    setCurrentOrder(clickIndex)
    navigation.navigate("ItemDetail", { orderIndex: clickIndex })
  }

  const _renderItem = itemData => {
    return (
      <OrderItem
        style={styles.item}
        isSelected={itemData.index === currentOrder}
        source={{
          uri: itemData.item.thumbnailUrl
        }}
        id={itemData.item.id}
        title={itemData.item.id}
        price={itemData.item.title}
        onClickOrderItem={onClickOrderItemHandler}
      />
      // <View>
      //   <Text style={{color: 'red'}}>
      //   {itemData.title}
      // </Text></View>
    )
  }

  const _renderFooter = () => {
    if (!isFetching) return null
    return (
      <ActivityIndicator
        style={{ color: "#000", marginTop: 10, alignItems: "center" }}
      />
    )
  }

  const handleLoadMore = () => {
    if (isFetching) {
      return
    }
    _fetchVotes()
  }

  return (
    <View style={styles.pageContainer}>
      <SafeAreaView style={styles.container}>
        <NavigationBar goBack title="Formal t-shirt design" />
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>
            Voting ends this Sunday. March 21st!
          </Text>
        </View>
        <View style={styles.orderContainer}>
          <Text style={styles.orderTitle}>What shirt should we order?</Text>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            extraData={[currentOrder, page]}
            data={votes}
            renderItem={_renderItem}
            onEndReachedThreshold={0.01}
            onEndReached={handleLoadMore}
            ListFooterComponent={_renderFooter}
          ></FlatList>
        </View>
        <View style={styles.submitContainer}>
          <TouchableOpacity
            style={styles.submit}
            activeOpacity={0.9}
            onPress={() => props.onSubmit(currentOrder)}
          >
            <Text style={styles.submitText}>Submit Vote</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default OrderScreen
