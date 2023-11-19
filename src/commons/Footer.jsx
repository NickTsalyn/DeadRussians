import React from 'react';
import {Linking, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

  const onPressInst = () => {
    Linking.openURL('')
  }

  return (
    <SafeAreaView style={styles.footer}>
     <Pressable onPress={onPressInst}></Pressable>
      <View style={styles.donate}>
        <FontAwesomeIcon icon={faArrowLeft} color={'black'} size={20} />
        <View style={styles.donateItem}>
        <FontAwesomeIcon icon={faHome} color={'black'} size={20} />
        <Text style={styles.donateName}>Повернись живим</Text>
        </View>
        <FontAwesomeIcon icon={faArrowRight} color={'black'} size={20} />
      </View>
      <View style={styles.contacts}>
        <Text style={styles.footerName}>Nick's Eleven</Text>
        <FontAwesomeIcon icon={faHome} color={'black'} size={20} />
      </View>
    </SafeAreaView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
  },
  footerTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '900',
    padding: 10,
    textAlign: 'center',
  },
  footerName: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  contacts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  donate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  donateName: {
    fontSize: 20,
    color: 'black',
    fontWeight: '900',
    padding: 10,
    textAlign: 'center',
  },
  donateItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
