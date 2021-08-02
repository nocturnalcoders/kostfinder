import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ButtonComponent = props => {
  return (
    <TouchableOpacity onPress={props.onPress} >
      <Ionicons name={props.name} style={styles.icon}/>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  icon: {
    color: '#66a5ad',
    fontSize: 30,
    justifyContent:'center'
  },
});
