import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";
import fetchData from "@/services/api";
import { Link } from "expo-router";
import FavoriteIcon from "./FavoriteIcon";
import Icon from "react-native-vector-icons/FontAwesome";
import useCustomFonts from "@/hooks/useFonts";


const IndexRecipeScreen = () => {
  const [ skipRecipe, setSkipRecipe ] = useState(0)
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const URL = `https://dummyjson.com/recipes?limit=3&skip=${skipRecipe}`;
  const fontsLoaded = useCustomFonts();

  const passarReceita = () => {
    if(skipRecipe < 50){
      setSkipRecipe(skipRecipe + 3)
    }
    else{
      setSkipRecipe(0)
    }
  }


  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const resultado = await fetchData(URL);
        setData(resultado.recipes);
      } catch (error) {
        setError(error.message);
      }
    }; 

    fetchApiData();
  }, [skipRecipe]);

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View>
        <Text>Carregando conteúdo...</Text>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {data.map((recipe) => (
        <View key={recipe.id} style={styles.containerWrapper}>
          <Text style={styles.cuisineText}>{recipe.cuisine}</Text>
          <Link href={`./recipes/?idRecipe=${recipe.id}`}>
            <Image
              source={{ uri: recipe.image }}
              style={styles.imageStyle}
              accessibilityLabel={`Image of ${recipe.name}`} // Acessibilidade
            />
          </Link>
          <FavoriteIcon
            style={styles.iconHeart}
            idTest={`${recipe.id}`}
          />
          <Text style={styles.recipeName}>{recipe.name}</Text>
          <Text
          style={{
            fontFamily: "Mont-Serrat"
          }}>
            Tempo de preparo: {recipe.prepTimeMinutes || 0 + recipe.cookTimeMinutes || 0} minutos
          </Text>
        </View>
      ))}
      <TouchableOpacity
        style={styles.containerButton}
        onPress={() => passarReceita()}
      >
        <Icon name="plus" color="red" size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  desciptionRecipies: {
    flex: 1,
    width: "99%",
    alignItems: "flex-start",
    backgroundColor: "#fca89d",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  container: {
    alignItems: 'center',
    padding: 16,
  },
  containerWrapper: {
    marginTop: 16,
    backgroundColor: '#C2C0A6',
    height: 200,
    width: "90%", // Ajustado para uma largura maior
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10, // Opcional: para bordas arredondadas
    elevation: 5,
  },
  iconHeart: {
    position: "absolute",
    right: 20,
    top: 15,
  },
  imageStyle: {
    height: 100, // Aumentado para melhorar a visualização
    width: 100,
    borderRadius: 8, // Opcional: para bordas arredondadas
  },
  containerButton: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 640,
    right: 100,
    borderWidth: 1,     
    borderColor: 'red',
    elevation: 10,
  },
  cuisineText: {
    fontSize: 16,
    fontFamily: "Mont-Serrat"
  },
  textRecipeDescription: {
    fontFamily: "Mont-Serrat",
  },
  recipeName: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: "Bebas-Neue-Regular",
  },
});

export default IndexRecipeScreen;
