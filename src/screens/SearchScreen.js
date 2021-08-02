import {
  Button,
  Container,
  Header,
  Input,
  Item,
  Left,
  ScrollableTab,
  Tab,
  Tabs,
} from 'native-base';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Map from '../components/MapsComponent'
import MapView from 'react-native-maps';
import MapViewComponent from '../components/MapsComponent';
import DaftarKostComponent from '../components/DaftarKostComponent';


// import { Icon } from 'react-native-vector-icons/Icon';

export const SearchScreen = props => {
  return (
    <Container>
      {/* HEADERNYA BOSQ */}
      <Header
        searchBar
        rounded
        style={{backgroundColor: 'white', elevation: 0, borderBottomWidth: 0}}
        androidStatusBarColor="#66a5ad">
        <Left style={{marginLeft: -10}}>
          <Button
            style={{backgroundColor: 'white', elevation: 0}}
            // onPress={this.goBack}
            >
            {/* <Icon style={{color: '#66a5ad'}} name="arrow-back" /> */}
          </Button>
        </Left>
        <Item
          style={{
            marginLeft: -58,
            marginRight: 20,
            borderRadius: 0,
            borderWidth: 1,
            borderColor: '#ec7e2f',
            borderBottomColor: '#66a5ad',
          }}>
          {/* <Icon style={{color: '#ec7e2f'}} name="md-search" /> */}
          <Input placeholder="Contohnya Rumahnya si tole" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>

      <Tabs
        tabBarUnderlineStyle={{backgroundColor: '#66a5ad', height: 2}}
        renderTabBar={() => (
          <ScrollableTab style={{backgroundColor: 'white'}} />
        )}
        style={{elevation: 0, borderTopWidth: 0, backgroundColor: '#66a5ad'}}>
        <Tab
          heading="Lihat Peta"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}
          activeTextStyle={{color: '#66a5ad', fontFamily: 'Lato-Semibold'}}
          textStyle={{color: '#66a5ad', fontFamily: 'Lato-Semibold'}}
          tabContainerStyle={{borderTopWidth: 0}}>
          {/* <LihatPeta /> */}
          <MapViewComponent/>
        </Tab>
        <Tab
          heading="Daftar Kost"
          tabStyle={{backgroundColor: 'white'}}
          activeTabStyle={{backgroundColor: 'white'}}
          activeTextStyle={{color: '#66a5ad', fontFamily: 'Lato-Semibold'}}
          textStyle={{color: '#66a5ad', fontFamily: 'Lato-Semibold'}}
          tabContainerStyle={{borderTopWidth: 0}}>
          {/* <SearchKostPage okeoce={this.props.navigation} store={this.props.listkost} action={this.props}/>   */}
          <DaftarKostComponent/>
        </Tab>
      </Tabs>
    </Container>
    
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

export default SearchScreen;
