// Base
import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
// Lib
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// Comp
import NavOptions from '../components/NavOptions'
// Env
import { GOOGLE_MAPS_APIKEY } from '@env'
// Context
import { AppContext } from '../context/AppContext'

const HomeScreen = () => {
  const {userData, saveUserData} = useContext(AppContext)

  return (
    <View style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.image}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />

        <GooglePlacesAutocomplete 
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          styles={{ 
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            }
          }}
          enablePoweredByContainer={false}
          minLength={2}
          query={{ key: GOOGLE_MAPS_APIKEY, language: 'en' }}
          onPress={(data, details = null) => {
            saveUserData({
              ...userData,
              origin: details.geometry.location,
              description: data.description,
              destination: null
            })
          }}
          fetchDetails={true}
          returnKeyType={"search"}
        />

        <NavOptions />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
})

export default HomeScreen