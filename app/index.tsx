import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import RecipeScreen from "../components/recipeScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { Link } from "expo-router";
<<<<<<< HEAD
import SeachBar from "@/components/searchBar";
import TabBarNavigation from "@/components/navigation/components/navigation/TabBarIcon.tsx";
=======
import SeachBar from '@/components/seachBar'
import TabBarNavigation from "@/components/navigation/tabBarNavigation";
>>>>>>> 353071c6bf3cd0421878d765040beb56e3ac33a9

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setDarkMode(prevColor => (prevColor === "black" ? "blue" : "black"));
  };
  const [darkmode, setDarkMode] = useState("black");

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SeachBar/>
        <RecipeScreen />
      </ScrollView>
      <TabBarNavigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fac7b4",
    flex: 1, // Adicione flex: 1 para o SafeAreaView
  },
  scrollContainer: {
    paddingBottom: 100, // Adicione padding para evitar que o conteúdo fique atrás do item fixo
  },  
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
    backgroundColor: "#ffe1c9",
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  ItemFixed: {
    position: 'absolute',
    bottom: 20, // Ajuste a posição conforme necessário
    left: 20,
    right: 20,
    backgroundColor: '#ffe1c9',
    opacity: 0.8,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center', // Centraliza o conteúdo do item fixo
    flexDirection:'row',
    justifyContent: 'space-around'

  },
  fixedText: {
    
    color: '#fff', // Cor do texto para contraste
  },
});
