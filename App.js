import React from 'react';
import { Provider } from 'react-redux';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Store from './config/ReduxStore';

import LoginScreen from './screens/login/Login';
import EventsScreen from './screens/events/Events';
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import EventDetailsScreen from './screens/eventDetails/EventDetails';

const AppStack = createStackNavigator({
  Events: EventsScreen,
  EventDetails: EventDetailsScreen
}, { initialRouteName: 'Events' });

const AuthStack = createStackNavigator({
  Login: LoginScreen
}, { initialRouteName: 'Login', headerMode: 'none' });

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

const App = () => (
  <Provider store={Store}>
    <AppContainer />
  </Provider>
);

export default App;
