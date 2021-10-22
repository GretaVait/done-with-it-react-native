// Base
import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Image, Button } from 'react-native'
// Lib
import tw from 'tailwind-react-native-classnames'
import BottomSheet from 'reanimated-bottom-sheet'
// Navigation
import { useNavigation } from '@react-navigation/core'
// Context
import { AppContext } from '../context/AppContext'

const RideOptionsCard = () => { 
  const nav = useNavigation()
  const [selected, setSelected] = useState(null)
  const { userData: { travelTimeInformation } } = useContext(AppContext)

  const renderContent = () => (
    <SafeAreaView style={tw`bg-white h-full`}>
      
      <View style={tw`flex items-center py-4`}>
        <View style={tw`h-2 w-14 bg-gray-400 rounded-full`} /> 
      </View>

      <View>
        <Text style={tw`text-center py-5 text-xl border-b border-gray-200`}>Select a Ride {`- ${travelTimeInformation?.distance?.text}`}</Text>
      </View>

      <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item: { image, title, multiplier, id }, item }) => (
          <TouchableOpacity 
            style={tw`relative flex-row justify-between items-center px-10 ${id === selected?.id && 'bg-gray-200 z-50'}`}
            onPress={() => { setSelected(item) }}
          >
            <Image 
              source={{ uri: image }}
              style={styles.image}
            />

            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={tw`text-xl`}>€{((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100).toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`} disabled={!selected}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )

  const sheetRef = React.useRef(null)

  const data = [
    {
      id: "Uber-X-159",
      title: "UberX",
      multiplier: 1,
      image: "https://links.papareact.com/3pn"
    },
    {
      id: "Uber-XL-456",
      title: "Uber XL",
      multiplier: 1.2,
      image: "https://links.papareact.com/5w8"
    },
    {
      id: "Uber-LUX-789",
      title: "Uber LUX",
      multiplier: 1.75,
      image: "https://links.papareact.com/7pf"
    },
  ]

  const SURGE_CHARGE_RATE = 1.5

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={['70%', '30%', '30%']}
      initialSnap={1}
      borderRadius={10}
      renderContent={renderContent}
      enabledGestureInteraction={true}
      enabledContentTapInteraction={false}
    />
    // <View style={{ flex: 1, backgroundColor: 'gray' }}>
    //   <PressMe />
    // </View>
  ) 
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  }
})

export default RideOptionsCard