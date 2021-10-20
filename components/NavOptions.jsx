// Base
import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
// Lib
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
// Navigation
import { useNavigation } from '@react-navigation/core'


const NavOptions = () => {
  const nav = useNavigation()

  const data = [
    {
      id: "159",
      title: "Get a Ride",
      image: "https://links.papareact.com/3pn",
      screen: "Map"
    },
    {
      id: "456",
      title: "Order Food",
      image: "https://links.papareact.com/28w",
      screen: "Eats"
    },
  ]

  return (
    <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => { nav.navigate(item.screen) }}
          style={tw`pr-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={styles.image}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
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