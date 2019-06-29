import { createAppContainer, createStackNavigator } from 'react-navigation'
// import Chat from './src/Chat'
import Chat from './src/ClassChat'
console.disableYellowBox = true

const RootStack = createStackNavigator({
  Chat
})

export default createAppContainer(RootStack)