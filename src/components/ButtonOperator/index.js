import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

const ButtonOperator = ({ color, text, textColor, onPressed }) => {
  return (
    <TouchableOpacity 
      style={
        [
          styles.container, 
          { backgroundColor: color == null ? '#444444' : color }
        ]
      }
      onPress={onPressed}
    >
      <Text 
        style={
          [ styles.text, { color: textColor == null ? '#EDEDED' : textColor } ]
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default ButtonOperator;