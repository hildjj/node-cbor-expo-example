import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
require('cbor-rn-prereqs');
const cbor = require('cbor');


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, Expo: {cbor.encodeOne('Hello, Expo').toString('hex')}</Text>
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
