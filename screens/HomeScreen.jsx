// Base
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const HomeScreen = () => {

  return (
    <View style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.image}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />
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