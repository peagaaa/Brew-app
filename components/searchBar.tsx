import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import React from "react";

export default function SeachBar() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={20} color="#888" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Buscar..." />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#FFFF",
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
  ItemFixed: {
    position: "absolute",
    bottom: 20, // Ajuste a posição conforme necessário
    left: 20,
    right: 20,
    backgroundColor: "#ffe1c9",
    opacity: 0.8,
    padding: 15,
    borderRadius: 5,
    alignItems: "center", // Centraliza o conteúdo do item fixo
    flexDirection: "row",
    justifyContent: "space-around",
  },
  fixedText: {
    color: "#fff", // Cor do texto para contraste
  },
});
