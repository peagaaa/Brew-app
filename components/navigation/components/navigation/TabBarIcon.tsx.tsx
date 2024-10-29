import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function TabBarNavigation() {
  return (
    <View style={styles.containerItemFixed}>
      <Link href={"/"}>
        <AntDesign name="home" size={24} color="black" />
        <Text>Home</Text>
      </Link>
      <Link href={"/videos"}>
        <Foundation name="play-video" size={24} color="black" />
        <Text>Videos</Text>
      </Link>
      <Link href={"/saves"}>
        <AntDesign name="hearto" size={24} color="black" />
        <Text>Salvos</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  containerItemFixed: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#ffff",
    opacity: 0.8,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: 'black',
    borderWidth: 1
  },
});
