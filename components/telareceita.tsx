import { getApi } from '@/services/api'
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from 'react';
import {useLocalSearchParams} from 'expo-router'
import PageError from './pageError';



export default function TelaDaReceita(){

    const { idRecipe, nameRecipe } = useLocalSearchParams();

    const [recipe, setRecipe] = useState(null);
    const URL = `https://dummyjson.com/recipes/${idRecipe}`;

    const burcarDados = async () => {
        const data = await getApi(URL);
        setRecipe(data);
    };

    useEffect(() => {
        burcarDados(); // Chama a função ao montar o componente
    }, []);

    return(
        <View
            style={{flex:1}}
        >
            {
                !recipe ? 
                (
                    <PageError/>
                ): 
                (
                    <>
                        <Text
                            style={styles.recipeName}
                        >{recipe.name}</Text>
                        <Image
                            style={styles.imageRecipe}
                            source={{uri: recipe.image}}
                        />
                        <View>
                            <Text>Informações: </Text>
                        </View>
                        <Text>Ingredientes: </Text>
                        <FlatList
                            data={recipe.ingredients}
                            keyExtractor={(ingredient, index) => index.toString()}
                            renderItem={({item}) => (
                                <Text>{item}</Text>
                            )}
                        />
                        <Text>Modo de preparo: </Text>
                        <FlatList
                            data={recipe.instructions}
                            keyExtractor={(instruction, index) => index.toString()}
                            renderItem={({item}) => (
                                <Text>{item}</Text>
                            )}
                        />
                    </>
                )
            }                                                                                                                                                                                                                                                                                                                                         
        </View>
    );
}

const styles = StyleSheet.create({
    imageRecipe: {
        flex: 1,
        alignItems: 'center',
        height: 200,
        width: 200,
    },
    recipeName:{
        fontFamily:'BebasNeue',
        fontSize: 100
    }
  });