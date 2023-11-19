import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';

export const StatsItemDay = ({statsAll, statsDay, terms}) => {
  return (
    <View style={styles.statsBlock}>
      <SvgUri
        width={100}
        height={50}
        uri={terms.icon}
      />
      <View  style={styles.statsInfo}>
        <View style={styles.statsNumbers}>
          <Text style={styles.statsAll}>{statsAll}</Text>
          <Text style={styles.statsDay}>+({statsDay})</Text>
        </View>
        <Text style={styles.statsText}>{terms.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginLeft: 10,
    borderWidth: 1,
    padding: 5,
    // backgroundColor: 'red',
    width: 200,
    height: 120,
    flex: 1

  },
  statsImage: {
    height: 40,
    width: 35,
    marginRight: 30,
    marginLeft: 10,
  },
  statsAll: {
    color: 'black',
    fontSize: 15,
  },
  statsDay: {
    color: 'black',
    fontSize: 13,
  },
  statsText: {
    color: 'black',
    fontSize: 12,
  },
  statsNumbers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statsInfo: {
    flex: 1,
  }
});

export default StatsItemDay;
