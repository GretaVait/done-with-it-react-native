// Base
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
// Lib
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
// Navigation
import { useNavigation } from '@react-navigation/core'
// Context
import { AppContext } from '../context/AppContext'


const NavOptions = ({ userOrigin }) => {
  const nav = useNavigation()
  const { saveUserData, userData } = useContext(AppContext)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (userOrigin.description) {
      setDisabled(false)
    }
  }, [userOrigin])

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
    <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item: { screen, image, title, comingSoon } }) => (
        <TouchableOpacity
          onPress={() => { 
            !comingSoon && nav.navigate(screen)
            saveUserData({
              ...userData,
              origin: userOrigin,
              destination: null
            })
          }}
          style={tw`relative pr-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          disabled={disabled}
        >
          {comingSoon && 
            <View style={[tw`flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 bg-gray-200 z-50 bg-opacity-90`]}>
              <Text style={tw`text-lg font-semibold text-black`}>Coming Soon!</Text>
            </View>
          }
          <View style={tw`${disabled && 'opacity-30'}`}>
            <Image
              style={styles.image}
              source={{ uri: image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
            <Icon 
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright" color="white" type="antdesign" />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain'
  }
})

export default NavOptions