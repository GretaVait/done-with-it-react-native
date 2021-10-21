// Base
import React, { useContext, useEffect, useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// Lib
import MapView, { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import MapViewDirections from 'react-native-maps-directions'
// Context
import { AppContext } from '../context/AppContext'
// Env
import { GOOGLE_MAPS_APIKEY } from "@env"

const Map = () => { 
  const { userData: { origin, description, destination }, userData, saveUserData } = useContext(AppContext)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!origin || !destination) return;

    // Zoom & fit to see markers
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
    })
  }, [origin, destination])

  useEffect(() => {
    if (!origin || !destination) return

    const getTravelTime = async () => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&destinations=${destination.description}&origins=${origin.description}&key=${GOOGLE_MAPS_APIKEY}`)
      .then(res => res.json())
      .then(data => {
        saveUserData({
          ...userData,
          travelTimeInformation: data.rows[0].elements[0]
        })
      })
    }

    getTravelTime()

  }, [origin, destination, GOOGLE_MAPS_APIKEY])

  return (
    <MapView 
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
    >
      
      {
        origin && destination &&
          <MapViewDirections 
            lineDashPattern={[0]}
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeColor="black"
            strokeWidth={3}
          />
      }

      {
        origin?.location &&
          <Marker 
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng
            }}
            title="Origin"
            description={description}
            identifier="origin"
          />
      }
      {
        destination?.location &&
          <Marker 
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng
            }}
            title="Destination"
            description={description}
            identifier="destination"
          />
      }
    </MapView>
  ) 
}

const styles = StyleSheet.create({})

export default Map