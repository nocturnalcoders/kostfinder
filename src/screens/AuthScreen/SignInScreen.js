
  import React from 'react';
  import {StyleSheet, View, Text} from 'react-native';
  import {useNavigation} from '@react-navigation/native'
  export const SignInScreen = props => {
    // const navigation = useNavigation()

    // useEffect(async () => {
    //     const validasiSession = async () => {
    //       const isLogin = await AsyncStorage.getItem('session_id')
    //     }
    // }, [])

    // const proses = async () => {
    //   try {
    //     fetch('http://localhost:8080/api/sessions' {
    //       method: 'POST',
    //       headers: {
    //         'Accept' : 'application/json',
    //         'Content-Type' : 'application/json',
    //       },
    //       body : JSON.stringify({
    //         email : 'christiantolie99@gmail.com',
    //         password : '100299'
    //       })
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    //         if (responseJson.token) {
    //           AsyncStorage.setItem('session_id', 'session_id' + Math.random())
    //           navigation.navigate('Home')
    //         }
    //       })
    //       .then((responseJson) => {
    //         console.warn(responseJson)
    //       })
    //     })
    //   } catch(error) {
    //     console.warn(error);
    //   }
    // };

    return (
      <View>
          <Text>
              Ini SignInScreen
          </Text>
      </View>
    );
  };
  
  // class LihatPeta extends Component {
  //     render(){
  //         return(
  //          <Map Mode={'normal'} />        
  //         )
  //     }
  // }
  
  const styles = StyleSheet.create({});
  
  export default SignInScreen;
  