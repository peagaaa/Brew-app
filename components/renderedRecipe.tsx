import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

const RenderedRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const { idRecipe, nameRecipe } = useLocalSearchParams();
  const URL = `https://dummyjson.com/recipes/${idRecipe}`;
  const getRecipeApi = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        <Text>Deu erro aí pai!</Text>;
      }
      const data = await response.json();
      setRecipe(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getRecipeApi();
  }, []);

  if (!recipe) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />; // Exibe um carregando enquanto a receita não é definida
  }

  return (
        <View>
          <Text style={styles.header}>{}</Text>
          <Image
            style={styles.imageRecipe}
            source={{
              uri: recipe.image,
            }}
          />
          <Text>Ingredientes: </Text>
            <FlatList
                data={recipe.ingredients}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Text>{item}</Text>
                )}
            />
        </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    textAlign: "center",
  },
  imageRecipe: {
    width: "100%",
    height: 500,
  },
  listStyle: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 4,
    width: "100%",
    flex: 1,
  },
});

export default RenderedRecipe;
