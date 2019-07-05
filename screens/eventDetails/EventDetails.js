import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Text from '../../components/Text';
import ButtonWrapper from '../../components/Button';
import { navigate } from '../../utils/NavigationService';

class EventDetails extends Component {

  // constructor(props) {
  //   super(props)
  //   setNavigator(props.navigation)
  // }

  static navigationOptions = {
    title: 'Detalhes do evento',
  };

  render() {
    return (
      <View>
        <Text>Detalhes</Text>
      </View>
    )
  }
}

const mapStateToProps = ({ login }) => ({ login })

export default connect(mapStateToProps, {})(EventDetails);
