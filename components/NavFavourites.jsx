// Base
import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
// Lib
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
// Context
import { AppContext } from '../context/AppContext'
// Navigation
import { useNavigation } from '@react-navigation/core'

const NavFavourites = ({ origin }) => { 
  const { saveUserData, userData } = useContext(AppContext)
  const nav = useNavigation()

  const data = [
    {
      id: "159",
      icon: "home",
      location: "Home",
      destination: "Code Street, London, UK",
      lat: 51.522392,
      lng: -0.07083420000000001
    },
    {
      id: "456",
      icon: "briefcase",
      location: "Work",
      destination: "London Eye, London, UK",
      lat: 51.5032973,
      lng: -0.1195537
    }
  ]

  return (
    <FlatList 
      data={data}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-400`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { icon, location, destination, lat, lng } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`} onPress={() => {
          if (origin) {
            saveUserData({
              ...userData,
              origin: {
                description: destination,
                location: {
                  lat: lat,
                  lng: lng
                }
              }
            })
            nav.navigate('Navigate')
          } else {
            saveUserData({
              ...userData,
              destination: {
                description: destination,
                location: {
                  lat: lat,
                  lng: lng
                }
              }
            })
            nav.navigate('Map')
          }
        }}>
          <Icon 
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />

          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  ) 
}

const styles = StyleSheet.create({})

export default NavFavourites