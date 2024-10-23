import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { useLocalSearchParams  } from 'expo-router';
import RenderedRecipe from '@/components/renderedRecipe';
import TelaDaReceita from '@/components/telareceita';

export default function index() {

  const { idRecipe } = useLocalSearchParams();
  
  return (
    <SafeAreaView style={styles.containerWrapper}>
      <TelaDaReceita/>
    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({
  containerWrapper:{
    flex: 1,
  }
});

/*
{algumaCoisa ? (codigo se for verdadeiro) : (se for falso)}
*/
