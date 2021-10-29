import React from 'react';
import { TouchableOpacity, Text, Dimensions } from 'react-native';
import styles from './style';

const ButtonNumeric = ({ text, expanded, onPressed }) => {
  return (
    <TouchableOpacity
      style={
        [
          styles.container,
          {
            width: expanded ? Dimensions.get('window').width * .45 : Dimensions.get('window').width * .18,
          }
        ]
      }
      onPress={onPressed}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonNumeric;