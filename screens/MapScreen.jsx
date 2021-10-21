// Base
import React from 'react'
import { View, Text, StyleSheet, Touchable } from 'react-native'
// Lib
import tw from 'tailwind-react-native-classnames'
// Comp
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
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
        <TouchableOpacity onPress={() => { nav.navigate("Home") }}>
          {/* <Icon name="menu" type="material" size={24} color="#000" /> */}
          <Icon name="arrowleft" color="white" type="antdesign" size={24} />
          
        </TouchableOpacity>
      </View>
      
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen 
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>

    </View>
  ) 
}

const styles = StyleSheet.create({})

export default MapScreen