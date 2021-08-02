import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {
  Col,
  Container,
  Content,
  Grid,
  Header,
  Icon,
  Item,
  Left,
  Row,
  Text,
} from 'native-base';
import {ScrollView, StyleSheet, View} from 'react-native';

export const BookingComponent = props => {
  return (
    <Container>
      <Header
        searchBar
        rounded
        style={{backgroundColor: '#66a5ad', elevation: 0, borderBottomWidth: 0}}
        androidStatusBarColor="#66a5ad">
        <Item
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#66a5ad',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
            }}>
            List Booking
          </Text>
        </Item>
      </Header>
      <View style={{backgroundColor: '#66a5ad', height: 1}}></View>
      <ScrollView vertical showsVerticalScrollIndicator={true}>
        <Content style={{marginHorizontal: 20}}>
          <Card
            transparent
            style={styles.container}
            onPress={props.handlePress}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Content style={styles.row}>
              <Text style={styles.owner}>Bu oong</Text>
              <Text style={styles.type}>Campur</Text>
            </Card.Content>
            <Card.Content>
              <Title numberOfLines={1} style={styles.title}>
                {props.title}
              </Title>
            </Card.Content>
            <Card.Content></Card.Content>
            <Card.Content>
              <Title style={styles.title}>Rp.300.000</Title>
            </Card.Content>
          </Card>
        </Content>
      </ScrollView>
    </Container>
  );
};

// CardComponent.
//            {props.title}
//{props.userid}
//onPress={props.handlePress}

export default BookingComponent;

const styles = StyleSheet.create({});
