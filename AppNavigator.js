import { createStackNavigator, createAppContainer } from 'react-navigation'
import AddReservation from './src/components/AddReservation'
import ListReservations from './src/components/ListReservations'

const AppNavigator = createStackNavigator({
    add: { screen: AddReservation },
    list: { screen: ListReservations},
})

  export default createAppContainer(AppNavigator)
