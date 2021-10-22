// Base
import React, { useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
// Lib
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Icon } from 'react-native-elements'
// Env
import { GOOGLE_MAPS_APIKEY } from '@env'
// Context
import { AppContext } from '../context/AppContext'
// Navigation
import { useNavigation } from '@react-navigation/core'
// Comp
import NavFavourites from '../components/NavFavourites'

const NavigateScreen = () => { 
  const nav = useNavigation()
  const { userData, saveUserData } = useContext(AppContext)

  const data = [
    {
      id: "159",
      title: "Get a Ride",
      image: "https://links.papareact.com/3pn",
      screen: "Navigate",
      comingSoon: false
    },
    {
      id: "456",
      title: "Order Food",
      image: "https://links.papareact.com/28w",
      screen: "Eat",
      comingSoon: true
    },
  ]

  return (
    <SafeAreaView style={tw`bg-white flex-1 py-5`}>

      <View style={tw`flex items-start pt-4 px-4`}>
        <TouchableOpacity onPress={() => { nav.goBack() }}>
          <Icon name="arrowleft" color="black" type="antdesign" size={24} />
        </TouchableOpacity>
      </View>


      <View style={tw`flex-shrink`}>
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

              nav.navigate('Map')
            }}
          />
        </View>

        <NavFavourites />
      </View>

      {/* <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity 
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
          onPress={() => { nav.navigate('RideOptionsCard') }}
        >
          <Icon name="car" type="font-awesome" color="white" size={16}  />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex flex-row justify-between bg-white w-24 px-4 py-3 rounded-full`}>
          <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View> */}
      

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

export default NavigateScreen