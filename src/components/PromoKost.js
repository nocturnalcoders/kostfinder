import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {FastImage} from 'react-native-fast-image';

class PromoKost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://www.sehatkerjaku.com/upload/images/tetap-sehat-di-kost-selama-pandemi-covid-19.jpeg',
        'https://bangfirman.com/wp-content/uploads/2020/08/Rekomendasi-Kost-Platform-Bagi-Generasi-Milenial-1.pnghttps://bangfirman.com/wp-content/uploads/2020/08/Rekomendasi-Kost-Platform-Bagi-Generasi-Milenial-1.png',
        'https://www.rukostevelynbatam.com/wp-content/uploads/2020/11/artikel-rumah-kost-evelyn-batam-2.jpg',
        //    require('./assets/images/girl.jpg'),
      ],
    };
  }

  render() {
    return (
      <View style={[styles.itemBaris]}>
        <Text style={styles.text}>Artikel</Text>
        <View style={styles.itemBaris} onLayout={this.onLayout}>
          <SliderBox
            ImageComponent={FastImage}
            images={this.state.images}
            sliderBoxHeight={200}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 5,
              height: 5,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: 'rgba(128, 128, 128, 0.92)',
            }}
            ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
            imageLoadingColor="#2196F3"
          />
        </View>
      </View>
    );
  }
}

export default PromoKost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    backgroundColor: 'white',
  },
  cardContainer: {
    marginVertical: 3,
  },
  itemBaris: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  text: {
    color: '#474747',
    fontWeight: 'bold',
    paddingVertical: 20,
    fontSize: 19,
    paddingLeft: 20,
  },
});
