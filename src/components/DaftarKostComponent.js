import React, {Component} from 'react';
import {
  Image,
  View,
  ScrollView,
  StyleSheet,
  AsyncStorage,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  Left,
  Right,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge,
  Item,
  Input,
  DatePicker,
  ListItem,
  Body,
  Spinner,
} from 'native-base';
import CardComponent from '../components/CardComponent';
// import { Icon } from 'react-native-vector-icons/Icon';

const DaftarKostComponent = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Details');
      }}>
      <View
        style={{
          backgroundColor: 'white',
          height: 320,
          marginTop: 20,
          marginHorizontal: 10,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri: `https://www.jejakpiknik.com/wp-content/uploads/2018/10/malang-1-4-630x380.jpg`,
            }}
            style={{
              width: '90%',
              height: 200,
              resizeMode: 'contain',
              borderRadius: 5,
              marginHorizontal: 0,
            }}></Image>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={{color: '#4A92E6', marginLeft: 25}}>
            Hanya Laki Laki
          </Text>
          <Text style={{color: 'gray', marginLeft: 10}}>{'\u2022'}</Text>
          <Text style={{color: '#1BAA56', marginLeft: 10}}>Ada 2 kamar</Text>
          <Text style={{color: 'gray', marginLeft: 10}}>{'\u2022'}</Text>
          <Text style={{color: '#3B445B', marginLeft: 10}}>Poris Gaga</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 3}}>
          <Text style={{color: '#2E2D39', marginLeft: 25}}>
            Rp 1.000.000 / bulan
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 3}}>
          <Text style={{color: '#383746', marginLeft: 25}}>Kost Mawar</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Button
            disabled={true}
            style={{
              borderRadius: 10,
              marginLeft: 25,
              height: 30,
              backgroundColor: '#0BAA56',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontFamily: 'Lato-Regular',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              uppercase={false}>
              Bisa Booking
            </Text>
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default DaftarKostComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#0baa56',
  },
});
