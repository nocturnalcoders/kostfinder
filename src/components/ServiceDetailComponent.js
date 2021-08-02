import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Card,
  Title,
  Avatar,
  IconButton,
  Divider,
  Paragraph,    
  List,
} from 'react-native-paper';
import {ButtonComponent} from './ButtonComponent';

const ServiceDetailComponent = props => {
  const [visible, setVisible] = React.useState(true);

  return (
    <List.Section style={{backgroundColor: 'white'}}>
      <List.Subheader style={{fontSize:20}}>Disclaimer !</List.Subheader>
      <List.Item
        title="Bebas Biaya Admin"
        description="Kamu tidak akan dikenakan biaya admin saat melakukan pembayaran di E-Kost"
        left={() => <List.Icon icon="currency-usd-off" />}
      />
      <List.Item
        title="Booking Langsung"
        description="Kos ini bisa di-booking dan dibayar di aplikasi E-Kost, tanpa harus bertemu dengan Owner Kost"
        left={() => <List.Icon icon="calendar-multiple-check" />}
      />
      <List.Item
        descriptionNumberOfLines={3}
        title="Pro service"
        description="Ditangani secara profesional oleh tim E-Kost, selama kamu ngekost di sini, ada tim dari E-Kost yang akan merespon saran dan komplainmu"
        left={() => <List.Icon icon="face-agent" />}
      />
    </List.Section>
  );
};

const styles = StyleSheet.create({});

export default ServiceDetailComponent;
