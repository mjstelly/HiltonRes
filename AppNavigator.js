import { createStackNavigator, createAppContainer } from 'react-navigation'
import AddReservation from './src/components/AddReservation'
import ListReservations from './src/components/ListReservations'

const AppNavigator = createStackNavigator({
    list: { screen: ListReservations },
    add: { screen: AddReservation }

}
)

export default createAppContainer(AppNavigator)
