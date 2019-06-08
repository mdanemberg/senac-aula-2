import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'
import Login from './Screens/Login'
import Home from './Screens/Home'

const Auth = createStackNavigator({
  Login
})

const Internal = createStackNavigator({
  Home
})

const Root = createSwitchNavigator({
    Auth,
    Internal
})

export default createAppContainer(Root)