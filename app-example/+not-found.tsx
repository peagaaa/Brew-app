import { View, Text, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserComponent() {
  const [user, setUser] = useState(null); // Inicialize como null

  const value = {
    userId: 22,
    name: 'Pedro',
  };

  const localStorage = async () => {
    try {
      await AsyncStorage.setItem('User', JSON.stringify(value));
      console.log('User saved');
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('User');
      if (savedUser) {
        setUser(JSON.parse(savedUser)); // Converte para objeto
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Chame localStorage para armazenar o usuário quando o componente montar
    localStorage();
    // Chame getUser para recuperar o usuário
    getUser();
  }, []);

  return (
    <View>
      {user ? ( // Verifica se user existe
        <Text>{user.userId}</Text>
      ) : (
        <Text>Loading...</Text> // Exibe loading enquanto recupera
      )}
    </View>
  );
}
