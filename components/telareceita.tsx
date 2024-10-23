import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
  FlatList
} from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import fecthData from "@/services/api";
import useCustomFonts from "@/hooks/useFonts";

const TelaDaReceita = () => {
  const fontsLoaded = useCustomFonts();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { idRecipe } = useLocalSearchParams();

  const URL = `https://dummyjson.com/recipes/${idRecipe}`;

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const resultado = await fecthData(URL);
        setData(resultado); // Aqui setamos diretamente o resultado
      } catch (error) {
        setError(error.message);
      }
    };

    fetchApiData();
  }, [idRecipe]);

  // Caso a resposta da API apresente uma falha
  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  // Componente será executado enquanto a resposta da API não carregar.
  if (!data) {
    return (
      <View>
        <Text>Carregando conteúdo...</Text>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView style={styles.body}>

    <Text style={styles.recipeOrigin}>{data.cuisine}</Text>
    <Text style={styles.recipeName}>{data.name}</Text>

    <View style={styles.containerWrapperImage}>
      <Image style={styles.imageRecipe} source={{ uri: data.image }} />
    </View>

    <View>
      <Text style={styles.titleTeme}>Informações: </Text>
    </View>

    <Text style={styles.titleTeme}>Ingredientes: </Text>
    <FlatList
      data={data.ingredients}
      keyExtractor={(ingredient, index) => index.toString()}
      renderItem={({ item, index }) => 
        <View style={styles.itemContainerIngredients}>
          <Text style={styles.itemTextModoDePreparo}>{index + 1} . {item}</Text>
        </View>
        }
    />

    <Text style={styles.titleTeme}>Modo de preparo: </Text>
    <FlatList
      data={data.instructions}
      keyExtractor={(instruction, index) => index.toString()}
      renderItem={({ item, index }) => 
        <View style={styles.itemContainerModoDePreparo}>
          <Text style={styles.itemTextModoDePreparo}>{index + 1} . {item}</Text>
        </View>
      }
    />

  </ScrollView>
  );
};

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
    top: 25,
    right: 40
  }
});

export default TelaDaReceita;
