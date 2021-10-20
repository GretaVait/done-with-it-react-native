// Base
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
// Context
import { AppProvider} from './context/AppContext'
// Screens
import HomeScreen from './screens/HomeScreen'

export default function App() {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
