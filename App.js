import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Cellular from "expo-cellular";

export default function App() {
  return (
    <View style={styles.container}>
      {Cellular.mobileNetworkCode === "11" ? (
        <Text>楽天回線です</Text>
      ) : (
        <Text>楽天回線ではありません</Text>
      )}
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
