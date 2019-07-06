import styled from 'styled-components';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const Divisor = ({ text }) => (
  <View style={styles.divisor}>
    <Text weight="500" fontSize={16} color="#999999">{text}</Text>
    <View style={styles.borderBottom}></View>
  </View>
)

const styles = StyleSheet.create({
  divisor: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 5,
    overflow: 'hidden',
  },
  borderBottom: {
    borderBottomColor: "#733DBE",
    opacity: 0.15,
    borderBottomWidth: 2,
    height: 2,
    width: '100%',
    marginLeft: 10,
  }

})

export default Divisor;