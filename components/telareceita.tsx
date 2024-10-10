import { getApi } from "@/services/api";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import PageError from "./pageError";
import { useFonts } from "expo-font";
import useCustomFonts from "@/hooks/useFonts";

export default function TelaDaReceita() {
  const { idRecipe, nameRecipe } = useLocalSearchParams();

  const [recipe, setRecipe] = useState(null);
  const URL = `https://dummyjson.com/recipes/${idRecipe}`;

  const burcarDados = async () => {
    const data = await getApi(URL);
    setRecipe(data);
  };

  useEffect(() => {
    burcarDados(); // Chama a função ao montar o componente
  }, []);

  const fontsLoaded = useCustomFonts();

  return (
    <View style={{ flex: 1 }}>
      {!recipe ? (
        <PageError />
      ) : (
        <View style={styles.body}>
          <Text style={styles.recipeName}>{recipe.name}</Text>
          <Image style={styles.imageRecipe} source={{ uri: recipe.image }} />
          <View>
            <Text>Informações: </Text>
          </View>
          <Text>Ingredientes: </Text>
          <FlatList
            data={recipe.ingredients}
            keyExtractor={(ingredient, index) => index.toString()}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
          <Text>Modo de preparo: </Text>
          <FlatList
            data={recipe.instructions}
            keyExtractor={(instruction, index) => index.toString()}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {},
  recipeName: {
    fontFamily: "Bebas-Neue-Regular",
    fontSize: 40,
  },
  imageRecipe: {
    flex: 1,
    alignItems: "center",
    height: 400,
    width: "90%",
    marginTop: 20,
    borderRadius: 15,
    padding: 50,
  },
});
