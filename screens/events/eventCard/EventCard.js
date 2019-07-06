import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { dateToString } from '../../../utils/convertDates';
import { Feather } from '@expo/vector-icons';

import Text from '../../../components/Text';
import Card from '../../../components/Card';

const EventCard = ({ title, startAt, location, image, onPress }) => (
  <Card style={styles.card} onPress={onPress}>
    {image && <Image source={{ uri: image }} style={styles.image} />}
    <View>
      <Text fontSize={12} color="#999999">EVENTOS</Text>
      <Text fontSize={16} weight="bold">{title}</Text>
      <Text
        color="#999999"
        fontSize={17}>
        <Feather
          name="clock"
          size={16}
          styles={styles.iconClock} />
        {dateToString(startAt, " HH:mm")}
      </Text>
      {/* <Text color="#999999">{dateToString(startAt, "dddd, DD [de] MMMM [ás] HH:mm")} </Text> */}
      <Text color="#999999">{location} </Text>
    </View>
  </Card >
)


const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: Dimensions.get('window').height * (1 / 5),
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 0,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: "#733DBE",
  },
  iconClock: {
    color: "#999999",
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 100,
    marginRight: 10,
    resizeMode: 'contain'
  }
});


export default EventCard;
