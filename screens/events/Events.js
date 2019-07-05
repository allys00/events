import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { logout } from '../login/Login.actions';
import Text from '../../components/Text';
import ButtonWrapper from '../../components/Button';
import { setNavigator, navigate } from '../../utils/NavigationService';

class Events extends Component {

  constructor(props) {
    super(props)
    setNavigator(props.navigation)
  }

  static navigationOptions = {
    title: 'Events',
  };


  render() {
    return (
      <View>
        <Text>Olá</Text>
        <ButtonWrapper onPress={() => navigate('EventDetails')} text="Detalhes do evento" />
        <ButtonWrapper onPress={this.props.logout} text="logout" />
      </View>
    )
  }
}

const mapStateToProps = ({ login }) => ({ login })

export default connect(mapStateToProps, { logout })(Events);
