import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { dateToString } from '../../utils/convertDates';

import Text from '../../components/Text';
import Container from '../../components/Container';
import PurpleBox from '../../components/PurpleBox';

class EventDetails extends Component {

  static navigationOptions = {
    title: 'Detalhes do evento',
  };

  render() {
    const { title, image, startAt, description } = this.props.event;

    const day = dateToString(startAt, 'DD')
    const month = dateToString(startAt, 'MMM')
    const hour = dateToString(startAt, 'HH:mm')

    return (
      <View style={styles.page}>
        {image && <Image source={{ uri: image }} resizeMode="cover" style={styles.image} />}
        <Container style={styles.container}>
          <View style={styles.header}>
            <PurpleBox title={day} subtitle={month} />
            <View style={styles.contentTitle}>
              <Text fontSize={22} weight="bold">{title}</Text>
              <Text color="#666">{hour}</Text>
            </View>
          </View>
          <Text fontSize={16} color="#666666">{description}</Text>
        </Container>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#733DBE16",
  },
  contentTitle: {
    marginLeft: 15
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },
  container: {
    height: Dimensions.get('window').height * (2 / 3),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -20,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height * (1 / 3),
    marginRight: 10,
    resizeMode: 'contain'
  }
});

const mapStateToProps = ({ events }) => ({ event: events.eventSelected })

export default connect(mapStateToProps, {})(EventDetails);
