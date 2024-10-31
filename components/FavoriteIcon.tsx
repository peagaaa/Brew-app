import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FavoriteIcon({ style, idTest }) {

    const heartFull = 'heart';
    const heartEmpyt = 'hearto';

    const [ isFavorite, setIsFavorite ] = useState(false);
    const [ icon, setIcon ] = useState(heartEmpyt)

    const toggleFavorite = () => {
      if(!isFavorite){
        setIsFavorite(true)
        setIcon(heartFull)
      }else{
        setIsFavorite(false)
        setIcon(heartEmpyt)
      }
    }


  return (
    <TouchableOpacity style={[styles.iconWrapper, style]} onPress={toggleFavorite}>
      <Icon name={icon} size={30} color="red" />
      <Text>{idTest}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    iconWrapper: {
    position: "absolute",
  },
});