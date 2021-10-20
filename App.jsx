// Base
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// Lib
import { SafeAreaProvider } from 'react-native-safe-area-context'
// Navigation
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Context
import { AppProvider} from './context/AppContext'
// Screens
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'

export default function App() {
  const Stack = createNativeStackNavigator()


  return (
    <AppProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <View style={styles.container}>

            <Stack.Navigator>
              <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ headerShown: false }} 
              />
              <Stack.Screen 
                name="Map" 
                component={MapScreen}
              />
            </Stack.Navigator>

          </View>
        </SafeAreaProvider>
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
