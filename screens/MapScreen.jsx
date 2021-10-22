// Base
import React from 'react'
import { View, Text, StyleSheet, Touchable } from 'react-native'
// Lib
import tw from 'tailwind-react-native-classnames'
// Comp
import Map from '../components/Map'
import RideOptionsCard from '../components/RideOptionsCard'
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core'

const MapScreen = () => { 
  const Stack = createNativeStackNavigator()
  const nav = useNavigation()

  return (
    <View style={tw`flex-1`}>
      <View style={tw`absolute top-12 left-8 z-50 p-3 rounded-full bg-black shadow-lg`}>
        <TouchableOpacity onPress={() => { nav.goBack() }}>
          <Icon name="arrowleft" color="white" type="antdesign" size={24} />
          
        </TouchableOpacity>
      </View>
      
      <View style={tw`h-full`}>
        <Map />
      </View>

      <RideOptionsCard />

    </View>
  ) 
}

const styles = StyleSheet.create({})

export default MapScreen