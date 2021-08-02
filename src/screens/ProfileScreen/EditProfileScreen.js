import { Text } from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

const EditProfileScreen = props => {
  // const [visible, setVisible] = React.useState(true);

  return (
    <View>
      <Text>ini Edit Profile Screen</Text>
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
});

export default EditProfileScreen;
