import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, List} from 'react-native-paper';

const ListPaymentComponent = props => {
  return (
    <List.Section style={{backgroundColor: 'white'}}>
      {/* General Kost */}
      <List.Subheader style={{fontSize: 20, textAlign: 'center'}}>
        Payment Accepted
      </List.Subheader>
      <Card>
        <List.Item
          title="Bayar Menggunakan BCA"
          left={() => <List.Icon icon={require('../assets/logoBCA.png')} />}
          right={() => <List.Icon icon="swap-horizontal-bold" />}
        />
      </Card>

      <List.Item
        title="Bayar Menggunakan Mandiri"
        left={() => <List.Icon icon={require('../assets/logoMandiri.png')} />}
        right={() => <List.Icon icon="swap-horizontal-bold" />}
      />
      <List.Item
        title="Bayar Menggunakan Alfamart"
        left={() => <List.Icon icon={require('../assets/logoAlfamart.png')} />}
        right={() => <List.Icon icon="swap-horizontal-bold" />}
      />
    </List.Section>
  );
};

const styles = StyleSheet.create({});

export default ListPaymentComponent;
