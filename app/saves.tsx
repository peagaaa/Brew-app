import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import {RecipeContext} from '../contexts/savesRecipes'
import RecipeProvider from '../contexts/savesRecipes'


export default function Saves() {

  const { idreceita } = useContext(RecipeContext)

  return (
    <View>
      <Text>Tela de receitas salvas!</Text>
      <Text>Id da receita: { idreceita}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})