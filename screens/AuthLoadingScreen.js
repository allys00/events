import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, AsyncStorage } from 'react-native';
import { changeUserLogged } from './login/Login.actions';
import Loading from '../components/Loading';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = ({ login }) => ({ login })

export default connect(mapStateToProps, { changeUserLogged })(AuthLoadingScreen);