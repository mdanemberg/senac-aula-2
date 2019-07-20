import { createAppContainer, createStackNavigator } from 'react-navigation'
import Home from './src/screens/Home'
import Repository from './src/screens/Repository'
console.disableYellowBox = true

const RootStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Repository: {
    screen: Repository,
    navigationOptions: {
      header: null
    }
  }
})

export default createAppContainer(RootStack)
