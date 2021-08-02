import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Card } from 'react-native-paper';

class TitleName extends React.Component {

  render() {
    return (
      <View style={[styles.itemBaris]}>
        <Text style={styles.name}>Halo Christianto</Text>
        <Text style={styles.how}>Mau Cari Kost Dimana ?</Text>
      </View>
    );
  }
}

export default TitleName;

const styles = StyleSheet.create({
  itemBaris: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingVertical: 5,
    backgroundColor: 'white'
  },
  name: {
    color: '#474747',
    fontWeight: 'bold',
    paddingVertical: 10,
    fontSize: 19,
    paddingLeft: 20,
  },
  how: {
    color: '#474747',
    fontWeight: 'bold',
    fontSize: 19,
    paddingLeft: 20,
  },
});
