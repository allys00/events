import React from 'react';
import { connect } from 'react-redux';
import { changeUserLogged } from './login/Login.actions';

import Loading from '../components/Loading';
import { AsyncStorage } from 'react-native';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.changeUserLogged({ token: userToken });
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <Loading />
    );
  }
}

export default connect(null, { changeUserLogged })(AuthLoadingScreen);