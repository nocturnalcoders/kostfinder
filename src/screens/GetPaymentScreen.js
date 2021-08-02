import {Button, Footer, Left, Right, Text} from 'native-base';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import TitleDescriptionComponent from '../components/TitleDescriptionComponent';
import ServiceDetailComponent from '../components/ServiceDetailComponent';
import ImageCarousel from '../components/ImageSliderComponent';
import FacilityKostComponent from '../components/FacilityKostComponent';
import {Divider} from 'react-native-paper';
import ListPaymentComponent from '../components/ListPaymentComponent';

const GetPaymentScreen = props => {
  // const [visible, setVisible] = React.useState(true);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 12}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Payment Details')}>
          <ListPaymentComponent />
        </TouchableOpacity>
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

export default GetPaymentScreen;
