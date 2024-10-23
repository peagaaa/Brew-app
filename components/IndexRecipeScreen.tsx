import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import fetchData from "@/services/api";
import { Link } from "expo-router";

const IndexRecipeScreen = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const URL = 'https://dummyjson.com/recipes';

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
  }, []);

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
          <Text style={styles.recipeName}>{recipe.name}</Text>
          <Text>
            Tempo de preparo: {recipe.prepTimeMinutes || 0 + recipe.cookTimeMinutes || 0} minutos
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  },
  imageStyle: {
    height: 100, // Aumentado para melhorar a visualização
    width: 100,
    borderRadius: 8, // Opcional: para bordas arredondadas
  },
  cuisineText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recipeName: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default IndexRecipeScreen;
