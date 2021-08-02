import React from 'react';
import {
  StyleSheet,
  View,
  Text

} from "react-native";
import { ButtonComponent } from '../components/ButtonComponent';

// const Tab = createMaterialBottomTabNavigator();

const HeaderKost = () => {
  return (
    <View style={styles.servicesWrapper}>
      <ButtonComponent style={styles.iconGreen} name={"bed"} title={"Kost"} />
      <ButtonComponent style={styles.iconGreen} name={"fast-food"} title={"Food"} />
      <ButtonComponent style={styles.iconGreen} name={"partly-sunny"} title={"Laundry"} />
      <ButtonComponent style={styles.iconGreen} name={"pricetag"} title={"Mart"} />
    </View>
  );
};

const styles = StyleSheet.create({
  servicesWrapper: {
    backgroundColor: "white",
    paddingTop: 9,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

export default HeaderKost;