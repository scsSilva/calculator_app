import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * .11,
    width: Dimensions.get('window').width * .18,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize: 20
  }
});

export default styles;