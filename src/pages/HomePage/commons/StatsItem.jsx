import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';

export const StatsItem = ({statsAll, statsDay, terms}) => {
  return (
    <View style={styles.statsBlock}>
      <SvgUri
        width={100}
        height={50}
        uri={terms.icon}
      />
      <View>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  statsImage: {
    height: 75,
    width: 85,
    marginRight: 30,
    marginLeft: 10,
  },
  statsAll: {
    color: 'black',
    fontSize: 24,
  },
  statsDay: {
    color: 'black',
    fontSize: 20,
  },
  statsText: {
    color: 'black',
    fontSize: 18,
  },
  statsNumbers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default StatsItem;
