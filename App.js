import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './screens/login/Login';
// import Events from './screens/events/Events';


const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  }
},
  {
    headerMode: 'none'
  });

// const SwitchNavigator = createSwitchNavigator(
//   {
//     Login: AuthNavigator,
//     App: AppNavigator
//   },
//   {
//     initialRouteName: 'Login'
//   }
// );

// const App = () => (
//   <SwitchNavigator />
// );

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;