import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Cellular from "expo-cellular";

export default function App() {
  const [updateData, setUpdateData]=useState(Date.now())
  const [mnc, setMnc] = useState(Cellular.mobileNetworkCode);

  useEffect(()=>{
    setMnc(Cellular.mobileNetworkCode);
  }, [updateData])

  const onUpdateData=()=>{
    setUpdateData(Date.now());
  }

  return (
    <View style={styles.container}>
      {mnc === "11" ? (
        <Text style={styles.text}>楽天回線です</Text>
      ) : (
        <Text style={styles.text}>楽天回線ではありません</Text>
      )}
      <TouchableOpacity onPress={onUpdateData} style={styles.button}>
        <Text style={styles.text}>更新</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
  },
  button: {
    marginTop: 50,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 40,
  },
});
