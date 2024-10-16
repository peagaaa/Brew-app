import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";

export default function Icone({ style }) {

    const fullHeart = 'heart';
    const empytHeart = 'hearto';

    const [ changeIcon, setChangeIcon ] = useState(empytHeart);

    const changeHeartIcon = () => {
        if(changeIcon == empytHeart){
            setChangeIcon(fullHeart);
        }else{
            setChangeIcon(empytHeart);
        }
    }


  return (
    <TouchableOpacity style={[styles.iconWrapper, style]} onPress={changeHeartIcon}>
      <Icon name={changeIcon} size={40} color="red" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    iconWrapper: {
    position: "absolute",
  },
});