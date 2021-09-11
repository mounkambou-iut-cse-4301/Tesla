import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem';
export default function App() {
  return (
    <View style={styles.container}>
      <CarItem 
      name={"Model 3"}
      tagline={"Order On"}
      taglineCTA={"Touchless Delivey"}
      image={require('./assets/images/Model3.jpeg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
