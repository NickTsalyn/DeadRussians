import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { changeDate } from '../../../redux/dateSlice';
import { getDataByDate } from '../../../fetch/api';

const CalendarItem = () => {
  const [selected, setSelected] = useState('');

  const dispatch = useDispatch()

  const setDate = day => {
    setSelected(day.dateString)
    dispatch(getDataByDate(day.dateString))
    console.log(day)
  }



  return (
    <SafeAreaView style={styles.calendarBlock}>
      <Text style={styles.calendarDay}>{selected}</Text>
      <View style={styles.calendar}>
        <Calendar
          onDayPress={day => {
            setDate(day)
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
        />
      </View>
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
    height: 400
  },
  calendarDay: {
    fontSize: 24,
    color: 'white',
    fontWeight: '900',
    padding: 10,
    textAlign: 'center',
  },
});

export default CalendarItem;
