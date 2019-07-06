import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({ color = "733DBE", size = "large" }) => (
  <View style={styles.loadingView}>
    <ActivityIndicator size={size} color={color} />
  </View>
)

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  }
})

export default Loading;