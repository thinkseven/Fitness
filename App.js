import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import { purple, white } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import EntryDetail from './components/EntryDetail'
import Live from './components/Live'

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator(
  {
    History: History,
    AddEntry: AddEntry,
    Live: Live,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        if (routeName === 'History') {
          return <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        } else if (routeName === 'AddEntry') {
          return <FontAwesome name="plus-square" size={30} color={tintColor} />
        } else {
          return <Ionicons name="ios-speedometer" size={30} color={tintColor} />
        }
      },
    }),
    tabBarOptions: {
      showIcon: true,
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  },
)

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
