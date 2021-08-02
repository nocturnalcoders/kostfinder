import React, {Component} from 'react';
import {
  Image,
  View,
  ScrollView,
  StyleSheet,
  AsyncStorage,
  FlatList,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  Left,
  Right,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge,
  Item,
  Input,
  DatePicker,
  ListItem,
  Body,
  Spinner,
} from 'native-base';
import CardComponent from '../components/CardComponent';
// import { Icon } from 'react-native-vector-icons/Icon';

const DetailKostScreen = props => {
  return (
    <Container>
      {/* HEADER */}
      <Header
        searchBar
        rounded
        style={{backgroundColor: '#66a5ad', elevation: 0, borderBottomWidth: 0}}
        androidStatusBarColor="#66a5ad">
        <Left style={{marginLeft: -10}}>
          <Button
            style={{backgroundColor: '#66a5ad', elevation: 0}}
            onPress={() => this.backToHomePage()}></Button>
        </Left>
        <Item
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#66a5ad',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Lato-Semibold',
              marginLeft: -100,
              fontSize: 18,
            }}>
            List Booking
          </Text>
        </Item>
      </Header>
      <View style={{backgroundColor: 'white', height: 1}} />
      <Content>
        <ScrollView vertical>
          {/* display all list */}

          <View style={{height: 300}}>
            <View
              elevation={10}
              style={{
                marginHorizontal: 20,
                backgroundColor: 'white',
                height: 220,
                marginTop: 20,
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={{
                  uri: `https://www.blibli.com/friends/assets/2019/09/Kamar-Tidur-Pinterest.jpg`,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                  flex: 1,
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  backgroundColor: 'white',
                  flex: 2.2,
                  borderRadius: 10,
                  flexDirection: 'column',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    flex: 1,
                    borderRadius: 10,
                  }}>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={{
                      fontFamily: 'Lato-Bold',
                      marginTop: 20,
                      marginLeft: 10,
                      fontSize: 14,
                    }}>
                    Jenis Kamar : Kamar A
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    flex: 1,
                    flexDirection: 'column',
                  }}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        marginTop: 7,
                        marginLeft: 10,
                        fontSize: 13,
                        color: 'green',
                      }}>
                      Transfer Berhasil
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                    }}></View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 13,
                    }}>
                    Masuk : 29 Juni 2012
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Lato-Regular',
                      marginTop: 0,
                      marginLeft: 10,
                      fontSize: 13,
                    }}></Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      marginTop: 4,
                      marginLeft: 10,
                      fontSize: 13,
                    }}>
                    Keluar : 29 Juni 2012
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Lato-Regular',
                      marginTop: 0,
                      marginLeft: 10,
                      fontSize: 13,
                    }}></Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    flex: 1,
                    borderRadius: 10,
                  }}>
                  <Button
                    style={{
                      borderRadius: 10,
                      height: 30,
                      width: 170,
                      marginRight: 5,
                      marginLeft: 10,
                      backgroundColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: '#0baa56',
                    }}>
                    <Text
                      style={{
                        color: '#0baa56',
                        fontSize: 12,
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center',
                      }}
                      uppercase={false}>
                      Kamar Siap Huni
                    </Text>
                  </Button>
                </View>
              </View>
            </View>
          </View>
          <View style={{height: 300}}>
            <View
              elevation={10}
              style={{
                marginHorizontal: 20,
                backgroundColor: 'white',
                height: 220,
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={{
                  uri: `https://www.blibli.com/friends/assets/2019/09/Kamar-Tidur-Pinterest.jpg`,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                  flex: 1,
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  backgroundColor: 'white',
                  flex: 2.2,
                  borderRadius: 10,
                  flexDirection: 'column',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    flex: 1,
                    borderRadius: 10,
                  }}>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={{
                      fontFamily: 'Lato-Bold',
                      marginTop: 20,
                      marginLeft: 10,
                      fontSize: 14,
                    }}>
                    Jenis Kamar : Kamar A
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    flex: 1,
                    flexDirection: 'column',
                  }}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        marginTop: 7,
                        marginLeft: 10,
                        fontSize: 13,
                        color: 'green',
                      }}>
                      Transfer Berhasil
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                    }}></View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 13,
                    }}>
                    Masuk : 29 Juni 2012
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Lato-Regular',
                      marginTop: 0,
                      marginLeft: 10,
                      fontSize: 13,
                    }}></Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      marginTop: 4,
                      marginLeft: 10,
                      fontSize: 13,
                    }}>
                    Keluar : 29 Juni 2012
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Lato-Regular',
                      marginTop: 0,
                      marginLeft: 10,
                      fontSize: 13,
                    }}></Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    flex: 1,
                    borderRadius: 10,
                  }}>
                  <Button
                    style={{
                      borderRadius: 10,
                      height: 30,
                      width: 170,
                      marginRight: 5,
                      marginLeft: 10,
                      backgroundColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: 'red',
                    }}>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 12,
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center',
                      }}
                      uppercase={false}>
                      Belum di Jawab
                    </Text>
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
};
export default DetailKostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#0baa56',
  },
});
