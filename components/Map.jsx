// Base
import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// Lib
import MapView, { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
// Context
import { AppContext } from '../context/AppContext'

const Map = () => { 
  const { userData: { origin, description } } = useContext(AppContext)

  return (
    <MapView 
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.lat,
        longitude: origin.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
    >
      {
        origin &&
          <Marker 
            coordinate={{
              latitude: origin.lat,
              longitude: origin.lng
            }}
            title="Origin"
            description={description}
            identifier="origin"
          />
      }
    </MapView>
  ) 
}

const styles = StyleSheet.create({})

export default Map