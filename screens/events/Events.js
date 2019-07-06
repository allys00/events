import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import Text from '../../components/Text';
import Container from '../../components/Container'
import ButtonWrapper from '../../components/Button';

import { setNavigator, navigate } from '../../utils/NavigationService';
import { logout } from '../login/Login.actions';
import { getEvents } from './Events.actions';
import EventCard from './eventCard/EventCard';
import Loading from '../../components/Loading';
import { dateToString } from '../../utils/convertDates';
import Divisor from '../../components/Divisor';

class Events extends Component {

  constructor(props) {
    super(props)
    setNavigator(props.navigation)
  }

  static navigationOptions = {
    title: 'Events',
  };

  componentDidMount() {
    this.props.getEvents(1);
  }

  renderLoading = () => {
    if (!this.props.isLoading) return null;
    return (
      <View style={styles.loading}>
        <Loading />
      </View>
    );
  };

  renderItems = ({ item }) => {
    return (<>
      <Divisor text={dateToString(item.startAt, 'dddd, DD [de] MMMM')}></Divisor>
      <EventCard {...item} onPress={() => navigate('EventDetails')} />
    </>)
  }

  render() {
    const { eventsList, getEvents, currentPage } = this.props;
    return (
      // <View >
      // {/* <ButtonWrapper onPress={() => navigate('EventDetails')} text="Detalhes do evento" /> */}
      // {/* <ButtonWrapper onPress={this.props.logout} text="logout" /> */}
      <FlatList
        style={{ marginTop: 30 }}
        contentContainerStyle={styles.list}
        data={eventsList}
        renderItem={this.renderItems}
        keyExtractor={item => String(item.id)}
        onEndReached={() => getEvents(Number(currentPage) + 1)}
        onEndReachedThreshold={0.1}
        ListFooterComponent={this.renderLoading}
      />
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },
  loadingView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: 40
  }
});

const mapStateToProps = ({ events }) => ({
  eventsList: events.eventsList.data,
  currentPage: events.eventsList.metadata.page,
  isLoading: events.isLoading
})

export default connect(mapStateToProps, { getEvents, logout })(Events);