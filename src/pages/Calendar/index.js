import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import CalendarItem from './commons/CalendarItem';

const Calendar = () => {
  return (
    <SafeAreaView>
      <LinearGradient
        style={styles.linearGradient}
        colors={['#0057b8', '#fff', '#FFD600']}
        start={{x: 0, y: 0.3}}
        end={{x: 0.7, y: 1.0}}
        locations={[0, 0.45, 0.75]}>
        <CalendarItem/>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: 'red',
    height: 100,
  },
  linearGradient: {
    height: '100%',
    padding: 5,
  },
});

export default Calendar;
