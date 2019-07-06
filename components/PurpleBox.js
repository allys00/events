import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const PurpleBox = ({ title, subtitle = '' }) => (
  <View style={styles.box}>
    <Text style={styles.text} fontSize={22} weight="bold">{title}</Text>
    <Text style={styles.text}>{subtitle.toUpperCase()}</Text>
  </View>
)

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    backgroundColor: "#733DBE16",
    borderRadius: 5,
  },
  text: {
    color: "#733DBE",
    marginBottom: 0,
  }
})

export default PurpleBox;