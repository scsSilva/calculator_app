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
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    padding: 20,
  },

  numberMemoryPanel: {
    fontSize: 20,
    color: '#EDEDED',
    fontWeight: '300',
  },

  numberPanel: {
    fontSize: 45,
    color: '#fff',
    fontWeight: '700',
    overflow: 'hidden',
  },

  keyboardView: {
    height: Dimensions.get('window').height * .77,
    padding: 20,
    justifyContent: 'space-around'
  },

  rowButton: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default styles;