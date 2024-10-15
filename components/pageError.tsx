import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React from "react";

export default function PageError() {
  return (
    <View style={styles.containerWrapper}>
        <View
            style={styles.containerDogPlusLoading}
        >
            <Image
                source={require("@/assets/images/dog.png")}
                style={styles.imageDog}
            />
            <ActivityIndicator 
                color="#ffe1c9"
                size='large'
            />
        </View>

      <View
        style={styles.text}
      >
        <Text style={styles.textStyle}>Um momento sua receita</Text>
        <Text style={styles.textStyle}>está sendo preparada!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#fac7b4'
  },
  imageDog: {
    width:  100,
    height: 100,
    marginRight: 20,
  },
  containerDogPlusLoading:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom: 1
  },
  text: {
    flexDirection: "column",
  },
  textStyle:{
    color: '#998b82',
    textAlign: 'center',
    fontSize: 20
  }
});
