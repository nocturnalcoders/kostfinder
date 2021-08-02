import React, { Component } from "react";
import { Image, View, ScrollView, StyleSheet,AsyncStorage } from "react-native";
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
  Spinner
} from "native-base";

const ListPaymentDetailComponent = props => {
  return (
    <Container>
          {/* HEADER */}
          <Header
            searchBar
            rounded
            style={{
              backgroundColor: "#66a5ad",
              elevation: 0,
              borderBottomWidth: 0
            }}
            androidStatusBarColor="#66a5ad"
          >
            <Left style={{ marginLeft: -10 }}>
              <Button style={{ backgroundColor: "#66a5ad", elevation: 0 }} onPress={() => this.previousPage()}>
                <Icon style={{ color: "white" }} name="arrow-back" />
              </Button>
            </Left>
            <Item
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#66a5ad"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "Lato-Semibold",
                  marginLeft: -100,
                  fontSize: 18
                }}
              >
                Booking
              </Text>
            </Item>
          </Header>
          <View style={{ backgroundColor: "white", height: 1 }}></View>
          <ScrollView vertical showsVerticalScrollIndicator={false}>
          <Content style={{ marginHorizontal: 20 }}>
           
  
              {/* LOOP TANGGAL */}
              <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
  
              {/* PILIH TANGGAL */}
              <View style={{ height: 90 }}>
                <DatePicker
                  defaultDate={new Date(2019, 8, 17)}
                  minimumDate={new Date(2019, 8, 17)}
                  maximumDate={new Date(2020, 12, 1)}
                  locale={"id"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"slide"}
                  androidMode={"calendar"}
                  textStyle={{ color: "#0baa56" }}
                  placeHolderText="Tanggal Masuk"
                  // onDateChange={this.setDate}
                  disabled={false}
                />
                <Text>
                  {/* Date: {this.state.chosenDate.toString().substr(4, 12)} */}
                </Text>
              </View>
  
             
              </View>
            
              {/* GARIS GRAY */}
              <View style={{ backgroundColor: "#bdbdbd", height: 1 }} />
  
              {/* DETAIL KOST DAN HARGA */}
              <View
                style={{
                  backgroundColor: "white",
                  height: 130,
                  flexDirection: "row"
                }}
              >
                <View
                  style={{ flex: 2, backgroundColor: "red", marginVertical: 20 }}
                >
                  <Image
                    source={{uri : `https://www.blibli.com/friends/assets/2019/09/Kamar-Tidur-Pinterest.jpg`}}
                    style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                  />
                </View>
                <View
                  style={{
                    flex: 5,
                    backgroundColor: "white",
                    marginLeft: 20,
                    marginVertical: 20,
                    flexDirection: "column"
                  }}
                >
                  <Text style={{ flex: 2, fontFamily: "Lato-Semibold" }}>
                    Kost Mawar Poris Cipondoh
                  </Text>
                  <Image
                    // source={require("../src/img/detail/fasilitass.png")}
                    style={{ width: 141, height: 18, resizeMode: "contain" }}
                  />
                  <Text style={{ flex: 1, fontFamily: "Lato-Bold", marginTop: 2 }}>
                    Rp 3.000.000/ bulan
                  </Text>
                </View>
              </View>
  
              {/* GARIS GRAY */}
              <View style={{ backgroundColor: "#bdbdbd", height: 1 }} />
  
              {/* DATA PENGHUNI */}
              <View
                style={{
                  backgroundColor: "white",
                  height: 220,
                  flexDirection: "column",
                  marginVertical: 20
                }}
              >
                <View
                  style={{
                    flex: 1.1,
                    justifyContent: "space-between",
                    flexDirection: "row"
                  }}
                >
                  <Text style={styles.textsemibold}>Data Penghuni</Text>
                  <Text style={{ color: "#ec4a0c" }}>Ubah</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    flexDirection: "row"
                  }}
                >
                  <Text style={styles.textabu}>Nama Lengkap</Text>
                  <Text style={styles.textsemibold}>Angga Priyatna</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    flexDirection: "row"
                  }}
                >
                  <Text style={styles.textabu}>Jenis Kelamin</Text>
                  <Text style={styles.textsemibold}></Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    flexDirection: "row"
                  }}
                >
                  <Text style={styles.textabu}>No Handphone</Text>
                  <Text style={styles.textsemibold}>-</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    flexDirection: "row"
                  }}
                >
                  <Text style={styles.textabu}>Pekerjaan</Text>
                  <Text style={styles.textsemibold}>Lainnya</Text>
                </View>
              </View>
  
              {/* GARIS GRAY */}
              <View style={{ backgroundColor: "#bdbdbd", height: 1 }} />
  
              {/* KETERANGAN BIAYA LAIN */}
              <View
                style={{
                  backgroundColor: "white",
                  height: 70,
                  marginTop: 20,
                  flexDirection: "column"
                }}
              >
                <Text style={styles.textsemibold}>Keterangan Biaya Lain</Text>
                <Text style={styles.textabu}>-</Text>
              </View>
  
              {/* CHECK BOX */}
              <View
                style={{
                  backgroundColor: "white",
                  marginTop: 20,
                  height: 50,
                  flexDirection: "row"
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    marginLeft: -10,
                    marginTop: -5
                  }}
                >
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  <Text style={styles.textcheckbox}>{"Saya menyetujui "}</Text>
                  <Text
                    onPress={() => alert("syaratnya bootcamp 6 minggu")}
                    style={styles.textcheckboxijo}
                  >
                    {"syarat ketentuan"}
                  </Text>
                  <Text style={styles.textcheckbox}>
                    {" dan memastikan data di atas benar"}
                  </Text>
                </View>
              </View>
  
              {/* BUTTON BOOK */}
              <Button
                block
                style={{
                  backgroundColor: "#66a5ad",
                  marginVertical: 20,
                  borderRadius: 6
                }}
  
                // onPress={() => this.booking(params,this.state.chosenDate.toString().substr(4, 12))}
              >
                <Text
                  uppercase={false}
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontFamily: "Lato-Semibold"
                  }}
                >
                  Book
                </Text>
              </Button>
          </Content>
        </ScrollView>
        </Container>
  );
};

const styles = StyleSheet.create({});

export default ListPaymentDetailComponent;
