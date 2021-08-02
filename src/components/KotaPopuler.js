import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

class KotaPopuler extends React.Component {
  static navigationOptions = {header: null};
  constructor() {
    super();
    this.state = {
      kotaPopuler: [
        {
          id: '1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Yogyakarta_Indonesia_Tugu-Yogyakarta-01.jpg/1200px-Yogyakarta_Indonesia_Tugu-Yogyakarta-01.jpg',
          nama: 'Yogyakarta',
        },
        {
          id: '2',
          image:
            'https://idetrips.com/wp-content/uploads/2018/07/Monas-jakarta-tourism-go-id-640x427.jpg',
          nama: 'Jakarta',
        },
        {
          id: '3',
          image:
            'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/07/27/393818565.jpeg',
          nama: 'Bandung',
        },
        {
          id: '4',
          image:
            'https://cdn-u1-gnfi.imgix.net/post/large-surabaya-e5b46818b09a03a19c39137e32d22c1f.jpg',
          nama: 'Surabaya',
        },
        {
          id: '5',
          image:
            'https://semarangwingkorolls.net/wp-content/uploads/2018/03/Tugu-Muda-Semarang-2.jpg',
          nama: 'Semarang',
        }
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.kotaText}>Kota Populer</Text>
        <View style={styles.kotaContainer}>
          <FlatList
            horizontal={true}
            data={this.state.kotaPopuler} //take data from state,because state is reactiv variabel in react
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={this.props.action}
                style={styles.kotaItem}>
                <Image source={{uri: item.image}} style={styles.image} />
                <Text style={styles.namaKota}>{item.nama}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    backgroundColor: 'white'
  },
  kotaText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  kotaItem: {
    marginTop: 20,
    marginRight: 10,
  },
  namaKota: {
    color: '#2c3e50',
    textAlign: 'center',
    position: 'absolute',
    top: 125,
    left: 10,
    color: '#fff',
  },
  kotaContainer: {
    flexDirection: 'row',
  },
});

//make this component available to the app
export default KotaPopuler;
