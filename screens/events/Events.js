import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, FlatList } from 'react-native';

import { setNavigator, navigate } from '../../utils/NavigationService';
import { logout } from '../login/Login.actions';
import { getEvents, changeEventSelected } from './Events.actions';
import { dateToString } from '../../utils/convertDates';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Divisor from '../../components/Divisor';
import EventCard from './eventCard/EventCard';
import Loading from '../../components/Loading';

class Events extends Component {

  constructor(props) {
    super(props)
    setNavigator(props.navigation);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Events',
      headerRight: (
        <TouchableOpacity
          style={{ paddingRight: 20 }}
          onPress={navigation.getParam('logout')}>
          <AntDesign
            name="logout"
            color="#000"
            style={{ fontSize: 18 }}
          />
        </TouchableOpacity>
      ),
    }
  };

  componentDidMount = () => {
    this.props.getEvents(1);
    this.props.navigation.setParams({ logout: this.props.logout })
  }

  renderLoading = () => {
    if (!this.props.isLoading) return null;
    return (
      <Loading size="large" color="#733DBE" />
    );
  };

  openEventDetails = (event) => {
    this.props.changeEventSelected(event);
    navigate('EventDetails');
  }

  renderItems = ({ item, index }) => {
    const lastDay = index === 0 ? null : dateToString(this.props.eventsList[index - 1].startAt, 'DD/MM/YYYY');
    const showDivisor = dateToString(item.startAt, 'DD/MM/YYYY') !== lastDay;
    return (<>
      {showDivisor && <Divisor text={dateToString(item.startAt, 'dddd, DD [de] MMMM')}></Divisor>}
      <EventCard {...item} onPress={() => this.openEventDetails(item)} />
    </>);
  }

  render() {
    const { eventsList, getEvents, currentPage } = this.props;
    return (
      <FlatList
        style={{ marginTop: 30 }}
        contentContainerStyle={styles.list}
        data={eventsList}
        renderItem={this.renderItems}
        keyExtractor={item => String(item.id)}
        onEndReached={() => getEvents(Number(currentPage) + 1)}
        onEndReachedThreshold={0.2}
        ListFooterComponent={this.renderLoading}
      />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  }
});

const mapStateToProps = ({ events }) => ({
  eventsList: events.eventsList.data,
  currentPage: events.eventsList.metadata.page,
  isLoading: events.isLoading
})

export default connect(mapStateToProps, { getEvents, logout, changeEventSelected })(Events);
