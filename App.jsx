/**
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Генеральний штаб ЗС України інформує</Text>
      <LinearGradient
        style={styles.linearGradient}
        colors={['#4c669f', '#3b5998', '#192f6a']}>
        <Text styles={styles.buttonText}>
          Загальні бойові втрати російського окупанта
        </Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center'
  },
  //   linearGradient: {
  //     flex: 1,
  //     paddingLeft: 15,
  //     paddingRight: 15,
  //     borderRadius: 5,
  //   },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default App;
