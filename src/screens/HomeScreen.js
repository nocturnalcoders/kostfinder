import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
//Import Component
import KotaPopuler from '../components/KotaPopuler';
import PromoKost from '../components/PromoKost';
import HeaderKost from '../navigations/HeaderKost';
import CardComponent from '../components/CardComponent';
import TitleName from '../components/TitleNameComponent';
import SearchComponent from '../components/SearchComponent';
import TerbitKost  from '../components/TerbitKost';

const HomeScreen = props => {
  const [hasError, setError] = useState(false);
  const [data, setData] = useState([]);

  async function fetchdata() {
    try {
      // const res = await axios.get('http://192.168.100.3:8080/api/v1/kosts')   
      const res = await axios.get('http://192.168.100.3:8080/api/v1/kosts')   
      console.log(res, 'res gan');
      console.log(res.data, 'res data');
      setData(res.data);
    } catch (error) {
      console.log(error, 'erorrrrr');
      setError(error.response.data);
      alert(hasError.toString());
    }
    console.log(res, 'nih dapet');
  }

  useEffect(() => {
    fetchdata();
  }, []);

  //Pelajari useEffect , useState ..
  //Pelajari Bukan code tp dokumentasi

  // const [stateCard, setStateCard] = useState('yellow');

  const render = ({item}) => {
    console.log(item, 'itemmmmmmmmmm');
    return (
      <CardComponent
        // apaAja={"TEST"}
        // bgColor={stateCard}
        // name={item.name}
        name={item.name}
        price={item.price}
        // duration={item.duration}
        // status={item.status}
        handlePress={() => props.navigation.navigate('Details', {
          id: item.id,
        })}
      />
    );
  };

  return (

    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        ListHeaderComponent={
          <>
            <HeaderKost />
            <ScrollView>
              <TitleName />
              <SearchComponent />
              <PromoKost />
              <KotaPopuler />
            </ScrollView>
          </>
        }
        data={data.data}
        keyExtractor={(item) => item.id}
        renderItem={render}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'silver',
      width: 100,
      height: 20,
      borderRadius: 20,
      borderWidth: 0,
      alignItems: 'center',
    },
    image: {
      borderRadius: 20,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      width: 50,
      height: 120,
      alignSelf: 'center',
      flex: 1,
    },
    text: {
      flexDirection: 'column',
      flex: 1.5,
      paddingLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default HomeScreen;
