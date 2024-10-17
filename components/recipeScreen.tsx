import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/AntDesign";
import Icone from "./icon";
import AntDesign from '@expo/vector-icons/AntDesign';

const RecipeScreen = () => {

  const limitRecipe = 2;
  const [ skipRecipe, setSkipRecipe ] = useState(0)

  const URL = `https://dummyjson.com/recipes?limit=${limitRecipe}&skip=${skipRecipe}`;

  // ?limit=5 & skip=4

  const [recipes, setReceitas] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("ERRO: " + response.status);
        }
        const data = await response.json();
        // console.log(data);
        setReceitas(data.recipes);
      } catch (err) {
        setError(err.message);
      } /*finally {
          setLoading(false);
        }*/
    };
    getApi();
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
          }}
        >
          <Icone />
          <Image
            source={{ uri: item.image }}
            style={{ width: "100%", height: 200 }}
          />
          <Link
            //?id=${id}&nome=${nome}
            href={`./recipes/?idRecipe=${item.id}`}
            // href={`./recipes/`}
            style={styles.desciptionRecipies}
          >
            <View style={styles.desciptionRecipies}>
              <Text>{item.name}</Text>
              <Text>Origem: {item.cuisine}</Text>
              <Text>
                Tempo da receita: {item.prepTimeMinutes + item.cookTimeMinutes}{" "}
                Minutes
              </Text>
              <Text>Nota: {item.rating}</Text>
            </View>
          </Link>
        </View>
      )}
    />
      <AntDesign 
      style={{position:'relative', left: 123}}
        name="pluscircle" 
        size={24} 
        color="black" 
        onPress={() => {
          if(skipRecipe > 50){
            setSkipRecipe(0)
          }else{
            setSkipRecipe(skipRecipe + 2)
          }
        }}/>    
</>
  );
};

const styles = StyleSheet.create({
  body: {},
  desciptionRecipies: {
    flex: 1,
    width: "99%",
    alignItems: "flex-start",
    backgroundColor: "#fca89d",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  icon: {
    position: "absolute",
    right: 25,
    top: 15,
  },
});

export default RecipeScreen;
// link
