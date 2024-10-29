import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useEffect, useState } from 'react';
import React from "react";
import fetchData from "@/services/api";
import {Link} from 'expo-router'

export default function SearchBar() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [idRecipeDigitado, setIdRecipeDigitado] = useState(''); // Corrigido o nome da função de set

  const fetchApiData = async () => {
    const URL = `https://dummyjson.com/recipes/${idRecipeDigitado}`;

    try {
      const resultado = await fetchData(URL);
      setData(resultado); // Ajustado para pegar o resultado diretamente
      setError(null); // Reseta o erro ao buscar uma nova receita
    } catch (error) {
      setError(error.message);
      setData(null); // Reseta os dados ao encontrar um erro
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar receita"
          onChangeText={setIdRecipeDigitado}
          keyboardType="numeric"
        />
        <TouchableOpacity
          onPress={fetchApiData}
        >
        <Icon name="search" size={20} color="#888" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View>
      {data && idRecipeDigitado !== '' && (
      <View style={styles.back}>
        <Link
          href={`./recipes/?idRecipe=${data.id}`}
        >
        <Image
          style={styles.searchImage}
          source={{ uri: data.image }}
        />
        <Text>{data.name}</Text>
        </Link>
      </View>
      )}
      {error && <Text style={styles.error}>Receita não encontrada.</Text>}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 50,
    marginBottom: 50,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "80%",
    backgroundColor: "#FFF",
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  searchImage:{
    width: 50,
    height: 50
  },
  back:{
    justifyContent:'center',
    alignItems: 'center',
    height:120,
    width:120,
    backgroundColor: 'grey',
    borderRadius: 5,
  }
});
