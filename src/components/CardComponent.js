import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {Col, Grid, Row, Text} from 'native-base';
import {StyleSheet} from 'react-native';

export const CardComponent = props => {
  return (
    <Card transparent style={styles.container}
    onPress={props.handlePress}>
      <Card.Cover source={{uri: 'https://www.blibli.com/friends/assets/2019/09/Kamar-Tidur-Pinterest.jpg'}}  />
      <Card.Content style={styles.row}>
        <Text style={styles.owner}>Bu oong</Text>
        <Text style={styles.type}>Campur</Text>
      </Card.Content>
      <Card.Content>
        <Title numberOfLines={1} style={styles.title}>{props.name}</Title>
      </Card.Content>
      <Card.Content>
        
      </Card.Content>
      <Card.Content>
        <Title style={styles.title}>{props.price}</Title>
      </Card.Content>
    </Card>
  );
};

// CardComponent.
//            {props.title}
//{props.userid}
//onPress={props.handlePress}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    width: 177,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  title: {
    fontSize: 15,
  },
  owner: {
    fontSize: 12,
    marginTop: 10,
    width: 50,
    padding: 2,
  },
  type: {
    fontSize: 12,
    margin: 10,
    width: 50,
    padding: 2,
    textAlign:'center',
    borderWidth: 1
  },
  row : {
    flexDirection:'row',
  }

});
