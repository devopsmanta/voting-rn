import React, { useState } from "react"
import { Provider } from 'react-redux'
import { StyleSheet, View, Dimensions, Platform, StatusBar } from "react-native"
import store from "./src/redux/store"

import RootContainer from "./src/router"

export default function App() {
  // const [selectedOrder, setSelectedOrder] = useState(-1);
  // const onSubmitHandler = clickIndex => {
  //   setSelectedOrder(clickIndex);
  // };

  // let content = <OrderScreen onSubmit={onSubmitHandler} />;

  // if (selectedOrder !== -1) {
  //   content = <ItemDetailScreen order={selectedOrder} />;
  // }
  // return <View style={styles.container}>{content}</View>;
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootContainer />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
