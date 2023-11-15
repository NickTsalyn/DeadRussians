import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';


export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Генеральний штаб ЗС України інформує</Text>
      <Text style={styles.titleBig}>
        Загальні бойові втрати російського окупанта
      </Text>
      <View style={styles.blockData}>
        <Text style={styles.data}>7 червня</Text>
        <Text style={styles.day}>469-й день війни</Text>
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
