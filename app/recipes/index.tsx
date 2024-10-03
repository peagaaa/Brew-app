import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams  } from 'expo-router';
import RenderedRecipe from '@/components/renderedRecipe';

export default function index() {

  const { idRecipe } = useLocalSearchParams();
  return (
    <View>
      <RenderedRecipe/>
    </View>
  )
} 