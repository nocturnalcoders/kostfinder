import {Button, Footer, Left, Right, Text} from 'native-base';
import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import TitleDescriptionComponent from '../components/TitleDescriptionComponent';
import ServiceDetailComponent from '../components/ServiceDetailComponent';
import ImageCarousel from '../components/ImageSliderComponent';
import FacilityKostComponent from '../components/FacilityKostComponent';
import {Divider} from 'react-native-paper';
import axios from 'axios';


const DetailKostScreen = props => {
  const [hasError, setError] = useState(false);
  const [data, setData] = useState([]);
  // const [visible, setVisible] = React.useState(true);     

  const {id} = props.route.params
  
  console.log(id + " id");

  async function fetchdata() {
    try {
      const res = await axios.get('http://192.168.100.3:8080/api/v1/kosts/' + id)   
      console.log(res, 'detail res gan');
      console.log(res.data.data, 'detail res data');
      setData(res.data.data);
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

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 12}}>
        <ImageCarousel />
        <ScrollView>
          <TitleDescriptionComponent 
            name={data.name}
            short_desc={data.short_desc}
          />
          <FacilityKostComponent />
          <Divider />
          <Divider />
          <Divider />
          <ServiceDetailComponent />
        </ScrollView>
      </View>
      <View style={{flex: 1}}>
        <Footer style={{backgroundColor: '#ffffff'}}>
          <Left style={{flexDirection: 'column'}}>
            <Text style={{marginLeft: 10}}>{data.price}</Text>
            <Text style={{marginLeft: 10}}>Lihat Estimasi</Text>
          </Left>
          <Right>
            <Button
              bordered
              info
              style={styles.Button}
              onPress={() => props.navigation.navigate('Get Payment')}>
              <Text style={styles.Text}>booking yuk!</Text>
            </Button>
          </Right>
        </Footer>
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

export default DetailKostScreen;
