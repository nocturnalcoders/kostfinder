import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Card,
  Title,
  Avatar,
  IconButton,
  Divider,
  Paragraph,
} from 'react-native-paper';
import {ButtonComponent} from './ButtonComponent';

const TitleDescriptionComponent = props => {
  const [visible, setVisible] = React.useState(true);
  console.log("props ", props.name);
  return (
    <Card style={styles.border}>
      <Card.Content>
        <Title style={styles.kostype}>Campur</Title>
        <Title style={styles.head}>{props.name}</Title>
        <Title style={styles.subhead}>{props.short_desc}</Title>
      </Card.Content>
      <Card.Content>
        {/* <Title style={styles.Head}>{props.price}</Title> */}
        <Paragraph style={styles.description}>5x5 m</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  border: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  head: {
    fontSize: 20,
    color: '#139B25',
  },
  subhead: {
    fontSize: 20,
  },
  kostype: {
    fontSize: 15,
  },
  description: {
    fontSize: 15,
  },
  facilty: {

    fontSize: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  servicesWrapper: {
    backgroundColor: 'white',
    paddingTop: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default TitleDescriptionComponent;
