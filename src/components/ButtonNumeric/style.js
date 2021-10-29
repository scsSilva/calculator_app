import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#444444',
    height: Dimensions.get('window').height * .11,
    borderRadius: 15
  },

  text: {
    fontSize: 20,
    color: '#EDEDED'
  }
});

export default styles;