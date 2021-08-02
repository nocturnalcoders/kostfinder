import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {List} from 'react-native-paper';

const FacilityKostComponent = props => {
  return (
    <List.Section style={{backgroundColor: 'white'}}>
      {/* General Kost */}
      <List.Subheader style={{fontSize: 20}}>Fasilitas Kost</List.Subheader>
      <List.Item
        title="Tidak Termasuk Listrik"
        left={() => <List.Icon icon="flash-off" />}
      />
      <List.Item
        title="Tidak ada min.pembayaran"
        left={() => <List.Icon icon="calendar-multiple-check" />}
      />
      {/* Luas Rumah Kost */}
      <List.Subheader style={{fontSize: 20}}>Luas Kamar</List.Subheader>
      <List.Item title="125 x 6" left={() => <List.Icon icon="ruler-square" />} />

      {/* Fasilitas External Kost */}
      <List.Subheader style={{fontSize: 20}}>Fasilitas Rumah Kost</List.Subheader>
      <List.Item title="Kasur Disetiap Kamar" left={() => <List.Icon icon="bed-double-outline" />} />
      <List.Item title="AC Disetiap Kamar" left={() => <List.Icon icon="air-conditioner" />} />
      <List.Item title="Kamar Mandi Disetiap Lantai" left={() => <List.Icon icon="shower" />} />

      {/* Peraturan Kamar */}
      <List.Subheader style={{fontSize: 20}}>Peraturan Rumah Kost</List.Subheader>
      <List.Item title="Akses 24 jam" left={() => <List.Icon icon="watch" />} />
      <List.Item title="Boleh Pasutri atau Single Gender" left={() => <List.Icon icon="account-group-outline" />} />
    </List.Section>
  );
};

const styles = StyleSheet.create({});

export default FacilityKostComponent;
