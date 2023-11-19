import React, { useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import CalendarItem from './commons/CalendarItem';
import DayInfo from './commons/DateInfo';
import Loader from '../../commons/Loader';
import Footer from '../../commons/Footer';

const Calendar = () => {

  const [modal, setModal] = useState(false)

  return (
    <ScrollView>
      <Loader visible={true}/>
      <LinearGradient
        style={styles.linearGradient}
        colors={['#9ecbff', '#fff', '#ffee9a']}
        start={{x: 0, y: 0.3}}
        end={{x: 0.7, y: 1.0}}
        locations={[0, 0.45, 0.75]}>
        <CalendarItem/>
        <DayInfo/>
        <Footer/>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: 'red',
    height: 100,
    paddingBottom: 15,
    marginBottom: 20,
  },
  linearGradient: {
    height: '100%',
    padding: 5,
  },
});

export default Calendar;
