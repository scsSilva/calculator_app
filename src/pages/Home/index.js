import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import ButtonNumeric from '../../components/ButtonNumeric';
import ButtonOperator from '../../components/ButtonOperator';
import styles from './style';

const Home = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [operator, setOperator] = useState('');
  const [memoryNumber, setMemoryNumber] = useState('');

  console.log(`OPERATOR: ${operator}`);
  console.log(`CURRENT NUMBER: ${currentNumber}`);

  function addNumberToCurrentNumber(text) {
    if (currentNumber == '0') {
      setCurrentNumber(text);
    } else {
      setCurrentNumber(currentNumber + text);
    }
  }

  function setOperatorNumbers(text) {
    if (operator == '') {
      setOperator(text)
      setCurrentNumber(currentNumber + ' ' + text + ' ');
    } else {
      let resultado = calculate();
      setCurrentNumber(resultado.toString() + ' ' + text + ' ');
      setOperator(text);
    }
  }

  function clearAllNumbers() {
    setCurrentNumber('0');
    setMemoryNumber('');
    setOperator('');
  }

  function clearCurrentNumber() {
    setCurrentNumber('0');
    setOperator('');
  }

  function calculate() {
    if (operator != '') {
      const parts = currentNumber.trim().split(operator);
      
      if (parts[0] != '') {
        const number1 = Number(parts[0]);
        const number2 = Number(parts[1]);

        switch (operator) {
          case '+':
            setCurrentNumber(number1 + number2);
            setOperator('');
            setMemoryNumber(currentNumber);
            return number1 + number2;

          case '-':
            setCurrentNumber(number1 - number2);
            setOperator('');
            setMemoryNumber(currentNumber);
            return number1 - number2;

          case '*':
            setCurrentNumber((number1 * number2).toFixed(2));
            setOperator('');
            setMemoryNumber(currentNumber);
            return (number1 * number2).toFixed(2);

          case '/':
            setCurrentNumber((number1 / number2).toFixed(2));
            setOperator('');
            setMemoryNumber(currentNumber);
            return (number1 / number2).toFixed(2);
        }
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewPanel}>
        <Text style={styles.numberMemoryPanel}>{memoryNumber}</Text>
        <Text style={styles.numberPanel}>{currentNumber}</Text>
      </View>

      <View style={styles.keyboardView}>
        <View style={styles.rowButton}>
          <ButtonOperator 
            color='rgba(218, 0, 55, 0.3)' 
            text='C'
            textColor='#DA0037'
            onPressed={() => clearAllNumbers()}
          />
          <ButtonOperator 
            text='DEL'
            onPressed={() => clearCurrentNumber()}
          />
          <ButtonOperator 
            text='%'
          />
          <ButtonOperator 
            color='rgb(240, 165, 0)' 
            text='/'
            onPressed={() => setOperatorNumbers('/')}
          />
        </View>

        <View style={styles.rowButton}>
          <ButtonNumeric 
            text='7'
            expanded={false}
            onPressed={() => addNumberToCurrentNumber('7')}
          />
          <ButtonNumeric 
            text='8'
            expanded={false}
            onPressed={() => addNumberToCurrentNumber('8')}
          />
          <ButtonNumeric 
            text='9'
            expanded={false}
            onPressed={() => addNumberToCurrentNumber('9')}
          />
          <ButtonOperator 
            color='rgb(240, 165, 0)' 
            text='X'
            onPressed={() => setOperatorNumbers('*')}
          />
        </View>

        <View style={styles.rowButton}>
          <ButtonNumeric 
            text='4'
            expanded={false}
            onPressed={() => addNumberToCurrentNumber('4')}
          />
          <ButtonNumeric 
            text='5'
            expanded={false}
            onPressed={() => addNumberToCurrentNumber('5')}
          />
          <ButtonNumeric 
            text='6'
            expanded={false}
            onPressed={() => addNumberToCurrentNumber('6')}
          />
          <ButtonOperator 
            color='rgb(240, 165, 0)' 
            text='-'
            onPressed={() => setOperatorNumbers('-')}
          />
        </View>

        <View style={styles.rowButton}>
          <ButtonNumeric 
            text='1'
            expanded={false}
            onPressed={() => addNumberToCurrentNumber('1')}
          />
          <ButtonNumeric 
            text='2'
            expanded={false}
            onPressed={() => addNumberToCurrentNumber('2')}
          />
          <ButtonNumeric 
            text='3'
            expanded={false}
            onPressed={() => addNumberToCurrentNumber('3')}
          />
          <ButtonOperator 
            color='rgb(240, 165, 0)' 
            text='+'
            onPressed={() => setOperatorNumbers('+')}
          />
        </View>

        <View style={styles.rowButton}>
          <ButtonNumeric 
            text='0'
            expanded
            onPressed={() => addNumberToCurrentNumber('0')}
          />
          <ButtonOperator  
            text='.'
            onPressed={() => addNumberToCurrentNumber('.')}
          />
          <ButtonOperator 
            color='rgb(87, 204, 153)' 
            text='='
            onPressed={() => calculate()}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home;