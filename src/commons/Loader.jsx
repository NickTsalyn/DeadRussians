import React from 'react';
import {Alert, Modal, Pressable, StyleSheet, View, ActivityIndicator} from 'react-native';
import {Text} from 'react-native-svg';

const Loader = visible => {
  return (
    <View style={styles.centeredView}>
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.centeresView}>
        <View style={styles.modalView}>
            <ActivityIndicator size='large' color='blue'/>
        </View>
      </View>
    </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(34,34,34,0.7'
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
    });

export default Loader;
