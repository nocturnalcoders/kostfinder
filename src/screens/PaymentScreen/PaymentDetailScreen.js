import {Button, Footer, Left, Right, Text} from 'native-base';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ListPaymentDetailComponent from '../../components/ListPaymentDetailComponent'

const PaymentDetailScreen = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 12}}>
        <ListPaymentDetailComponent/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  Button: {
    backgroundColor: 'white',
    margin: 10,
  },
  Text: {
    color: '#66a5ad',
  },
});

export default PaymentDetailScreen;
