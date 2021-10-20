// Base
import React, { useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
// Lib
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// Env
import { GOOGLE_MAPS_APIKEY } from '@env'
// Context
import { AppContext } from '../context/AppContext'
// Navigation
import { useNavigation } from '@react-navigation/core'

const NavigateCard = () => { 
  const { userData, saveUserData } = useContext(AppContext)
  const nav = useNavigation()

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, User!</Text>

      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete 
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            styles={toInputBoxStyles}
            fetchDetails={true}
            minLength={2}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en"
            }}
            onPress={(data, details = null) => {
              saveUserData({
                ...userData,
                destination: {
                  location: details.geometry.location,
                  description: data.description
                }
              })

              nav.navigate('RideOptionsCard')
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  ) 
}

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
})

export default NavigateCard