import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    Image,
    Button,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import {Link} from 'expo-router';
  
  const RecipeScreen = () => {
    const URL = 'https://dummyjson.com/recipes';
  
    const [recipes, setReceitas] = useState([]);
    const [error, setError] = useState(true);
    const [loading, setLoading] = useState(null);
  
    useEffect(() => {
      const getApi = async () => {
        try {
          const response = await fetch(URL);
          if (!response.ok) {
            throw new Error('ERRO: ' + response.status);
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
    }, []);
  
    return (
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 16,
              alignItems: 'center',
            }}>
            <Link
              //?id=${id}&nome=${nome}
              href={`./recipes/?idRecipe=${item.id}`}
              style={styles.desciptionRecipies}
            >                      
            <Image
              source={{ uri: item.image }}
              style={{ width: '100%', height: 200}}
            />
            <View style={styles.desciptionRecipies}>
              <Text>{item.name}</Text>
              <Text>Origem: {item.cuisine}</Text>
              <Text>Tempo da receita: {item.prepTimeMinutes + item.cookTimeMinutes} Minutes</Text>
              <Text>Nota: {item.rating}</Text>
            </View>
            </Link>
          </View>
        )}
      />
    );
  };

  const styles = StyleSheet.create({
    body:{

    },
    desciptionRecipies:{
      flex: 1,
      width: '100%',
      alignItems:'flex-start',
      backgroundColor: '#fca89d', 
      borderBottomRightRadius: 12,
      borderBottomLeftRadius: 12
    }
  });
  
  export default RecipeScreen;
  // link 