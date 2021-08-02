import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, List} from 'react-native-paper';
import MapView from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';


const MapViewComponent = props => {
  return (
    <MapView
      style={{flex: 1, width: window.width}} //window pake Dimensions
      region={{
        latitude: -6.186116,
        longitude: 106.682188,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <MapView.Marker
        coordinate={{
          latitude:  -6.186116,
          longitude: 106.682188,
        }}
        title="Lokasi"
        description="Hello"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({});

export default MapViewComponent;
