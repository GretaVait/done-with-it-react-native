// Base
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// Lib
import { SafeAreaProvider } from 'react-native-safe-area-context'
// Context
import { AppProvider} from './context/AppContext'
// Screens
import HomeScreen from './screens/HomeScreen'

export default function App() {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <View style={styles.container}>
          <HomeScreen />
        </View>
      </SafeAreaProvider>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
