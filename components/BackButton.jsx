// Base
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
// Navigation
import { useNavigation } from '@react-navigation/core'
// Lib
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const BackButton = ({ position }) => { 
  const nav = useNavigation()

  return (
    <View style={tw`p-3 rounded-full bg-black shadow-lg`}>
      <TouchableOpacity onPress={() => { nav.goBack() }}>
        <Icon name="arrowleft" color="white" type="antdesign" size={24} />
      </TouchableOpacity>
    </View>
  ) 
}

export default BackButton