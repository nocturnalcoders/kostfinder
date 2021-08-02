import {Button} from 'native-base';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class TerbitKost extends React.Component {
  render() {
    return (
      <View style={[styles.itemBaris]}>
        <Text style={styles.name}>Tertarik Terbitin Kost Kamu ?</Text>
        <Button warning style={styles.Button}>
          <Text style={styles.ButtonText}>Pasang Kost !</Text>
        </Button>
      </View>
    );  
  }
}
export default TerbitKost;

const styles = StyleSheet.create({
  itemBaris: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 5,
    flexWrap: 'wrap',
    margin: 15,
    justifyContent: 'space-between',
  },
  name: {
    color: '#474747',
    fontWeight: 'bold',
    paddingVertical: 10,
    fontSize: 15,
  },
  Button: {
    backgroundColor: '#66a5ad',
    fontSize: 10,
    borderRadius: 10  },
  ButtonText: {
    color: '#ffffff',
    margin: 5,
  },
});
