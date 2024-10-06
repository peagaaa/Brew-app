import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams  } from 'expo-router';
import RenderedRecipe from '@/components/renderedRecipe';
import TelaDaReceita from '@/components/telareceita';

export default function index() {

  const { idRecipe } = useLocalSearchParams();
  
  return (
    <View>
      <TelaDaReceita/>
    </View>
  )
} 