import { createStackNavigator, createAppContainer } from 'react-navigation'
import AddReservation from './src/components/AddReservation'
import ListReservations from './src/components/ListReservations'
import Home from './src/components/Home'

const AppNavigator = createStackNavigator(
  {
    Home,
    ListReservations,
    AddReservation
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator)
