import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

//import react-navigation stuff
import { createBottomTabNavigator } from 'react-navigation';

//import redux stuff
import { Provider } from 'react-redux';
import store from './store';

//import routing
import { RootRouting } from './config/routes';

const RootTab = createBottomTabNavigator(
  RootRouting,
  {
    //Initial route
    initialRouteName: 'Options',

    //header customization
    navigationOptions:{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

export default class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <RootTab />
      </Provider>
    );
  }
}
