import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './commons/Header';
import Stats from './commons/Stats';
import {useDispatch} from 'react-redux';
import {addStats} from '../../redux/statsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const test = 'test'

  useEffect(() => {
    dispatch(addStats(test));
  });

  return (
    <SafeAreaView>
      <LinearGradient
        style={styles.linearGradient}
        colors={['#0057b8', '#fff', '#FFD600']}
        start={{x: 0, y: 0.3}}
        end={{x: 0.7, y: 1.0}}
        locations={[0, 0.45, 0.75]}>
        <Header />
        <Stats />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 5,
  },
});

export default HomePage;
