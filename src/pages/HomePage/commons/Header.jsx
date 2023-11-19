import React, { useEffect } from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { getCurrentDay } from '../../../fetch/api';
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {
  const now = new Date();
  const monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = now.getMonth();
  const day = now.getDate()

  const nameMonth = monthName[month]

  const dispatch = useDispatch()
  const currentDay = useSelector(state => state.stats.currentDay.data.current_day)
  useEffect(() => {
    dispatch(getCurrentDay())
  }, [])
  

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Генеральний штаб ЗС України інформує</Text>
      <Text style={styles.titleBig}>
        Загальні бойові втрати російського окупанта
      </Text>
      <View style={styles.blockData}>
        <Text style={styles.data}>{day} {nameMonth}</Text> 
        <Text style={styles.day}>{currentDay}-й день війни</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blockData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    fontSize: 19,
    color: '#FFD600',
  },
  data: {
    fontSize: 19,
    color: 'black',
    fontWeight: '600',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 19,
    color: 'black',
    fontWeight: '600',
  },
  titleBig: {
    fontSize: 24,
    color: 'black',
    fontWeight: '900',
  },
});

export default Header;
