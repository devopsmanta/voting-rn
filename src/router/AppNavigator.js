import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import OrderScreen from "../containers/OrderScreen"
import ItemDetailScreen from "../containers/ItemDetailScreen"

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: OrderScreen
    },
    ItemDetail: {
      screen: ItemDetailScreen
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
)

export default createAppContainer(AppNavigator)
