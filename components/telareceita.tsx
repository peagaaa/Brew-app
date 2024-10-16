import { getApi } from "@/services/api";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView 
} from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import PageError from "./pageError";
import { useFonts } from "expo-font";
import Icon from '@/components/icon'
import useCustomFonts from "@/hooks/useFonts";

export default function TelaDaReceita() {
  const { idRecipe } = useLocalSearchParams();

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
    <View  style={{flex:1}}>
      {!recipe ? (
        <PageError />
      ) : (
        <ScrollView style={styles.body}>

          <Text style={styles.recipeOrigin}>{recipe.cuisine}</Text>
          <Text style={styles.recipeName}>{recipe.name}</Text>

          <View style={styles.containerWrapperImage}>
            <Image style={styles.imageRecipe} source={{ uri: recipe.image }} />
            <Icon
              style={styles.iconHeart}
            />
          </View>

          <View>
            <Text style={styles.titleTeme}>Informações: </Text>
          </View>

          <Text style={styles.titleTeme}>Ingredientes: </Text>
          <FlatList
            data={recipe.ingredients}
            keyExtractor={(ingredient, index) => index.toString()}
            renderItem={({ item, index }) => 
              <View style={styles.itemContainerIngredients}>
                <Text style={styles.itemTextModoDePreparo}>{index + 1} . {item}</Text>
              </View>
              }
          />

          <Text style={styles.titleTeme}>Modo de preparo: </Text>
          <FlatList
            data={recipe.instructions}
            keyExtractor={(instruction, index) => index.toString()}
            renderItem={({ item, index }) => 
              <View style={styles.itemContainerModoDePreparo}>
                <Text style={styles.itemTextModoDePreparo}>{index + 1} . {item}</Text>
              </View>
            }
          />

        </ScrollView>
      )}
    </View >
  );
}

/*Parte de estilização do layout*/

const styles = StyleSheet.create({
  body: {
    flex:1,
    marginLeft: 15,
    paddingTop: 20,
    paddingBottom: 20
  },
  recipeOrigin:{
    fontSize: 25,
    fontFamily: "Mont-Serrat"
  },
  recipeName: {
    fontFamily: "Bebas-Neue-Regular",
    fontSize: 40,
  },
  containerWrapperImage:{
    alignItems: 'center',
  },
  imageRecipe: {
    flex: 1,
    alignItems: "center",
    height: 400,
    width: "90%",
    marginTop: 20,
    borderRadius: 5,
    padding: 50,
    position: 'relative'

  },
  titleTeme:{
    fontFamily: 'Bebas-Neue-Regular',
    fontSize: 25,
    marginTop: 15
  },
  itemContainerIngredients:{
    flexDirection: 'row',
    alignItems: 'center', 
    marginRight: 20,
    paddingTop: 5
  },
  itemTextIngredients:{
    fontSize: 16,
    fontFamily: 'Mont-Serrat',
    color: 'black'
  },
  itemContainerModoDePreparo:{
    flexDirection: 'row',
    alignItems: 'center', 
    marginRight: 20,
    paddingTop: 5
  },
  itemTextModoDePreparo:{
    fontSize: 16,
    fontFamily: 'Mont-Serrat',
    color: 'black'
  },
  iconHeart:{
    position: 'absolute',
    top: 40,
    right: 40
  }
});
