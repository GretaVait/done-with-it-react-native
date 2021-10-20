// Base
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// Lib
import tw from 'tailwind-react-native-classnames'
// Comp
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const MapScreen = () => { 
  const Stack = createNativeStackNavigator()

  return (
    <View>
      
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