import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const CalendarItem = () => {
  return (
    <SafeAreaView style={styles.calendarBlock}>
      <Text style={styles.calendarDay}>8 June</Text>
      <View style={styles.calendar}></View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  calendar: {
    height: 250,
    backgroundColor: 'white',
  },
  calendarBlock: {
    padding: 5,
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'column',
  },
  calendarDay: {
    fontSize: 24,
    color: 'white',
    fontWeight: '900',
    padding: 10,
    textAlign: 'center'
  }
});

export default CalendarItem;
