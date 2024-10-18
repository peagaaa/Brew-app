import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import Icone from "./icon";
import Icon from "react-native-vector-icons/FontAwesome";
import useCustomFonts from "@/hooks/useFonts";
import { fetchRecipes } from '../services/fecthrecipes'; // Importando a função

const RecipeScreen = () => {
  const fontsLoaded = useCustomFonts();

  const limitRecipe = 2;
  const [skipRecipe, setSkipRecipe] = useState(0);
  const URL = `https://dummyjson.com/recipes?limit=${limitRecipe}&skip=${skipRecipe}`;
  
  const [recipes, setReceitas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    fetchRecipes(URL, setReceitas, setError);
  }, [skipRecipe]);

  return (
    <>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 16,
              alignItems: "center",
              position: "relative",
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: 200 }}
            />
            <Icone style={styles.iconHeart} />
            <Link
              href={`./recipes/?idRecipe=${item.id}`}
              style={styles.desciptionRecipies}
            >
              <View style={styles.desciptionRecipies}>
                <Text style={styles.textRecipeDescription}>{item.name}</Text>
                <Text style={styles.textRecipeDescription}>
                  Origem: {item.cuisine}
                </Text>
                <Text style={styles.textRecipeDescription}>
                  Tempo da receita: {item.prepTimeMinutes + item.cookTimeMinutes} Minutes
                </Text>
                <Text style={styles.textRecipeDescription}>
                  Nota: {item.rating}
                </Text>
              </View>
            </Link>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.containerButton}
        onPress={() => {
          if (skipRecipe <= 50) {
            setSkipRecipe(skipRecipe + 2);
          } else {
            setSkipRecipe(0);
          }
        }}
      >
        <Icon name="plus" color="red" size={50} />
      </TouchableOpacity>
    </>
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
  iconHeart: {
    position: "absolute",
    right: 30,
    top: 30,
  },
  containerButton: {
    backgroundColor: "white",
    height: 75,
    width: 75,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 100,
    right: 25,
  },
  textRecipeDescription: {
    fontFamily: "Mont-Serrat",
  },
});

export default RecipeScreen;
