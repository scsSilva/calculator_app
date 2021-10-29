import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    paddingTop: Constants.statusBarHeight,
  },

  viewPanel: {
    height: Dimensions.get('window').height * .23,
    // backgroundColor: 'gray',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 20,
  },

  numberMemoryPanel: {
    fontSize: 20,
    color: '#EDEDED',
  },

  numberPanel: {
    fontSize: 35,
    color: '#fff',
    fontWeight: '700'
  },

  keyboardView: {
    height: Dimensions.get('window').height * .77,
    padding: 20,
    // alignItems: 'center',
    justifyContent: 'space-around'
  },

  rowButton: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default styles;