import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  Button,
  ScrollView,
  Switch,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import RecipeScreen from '../components/recipeScreen';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {Link} from 'expo-router';

export default function Index() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {  
    setIsEnabled(previousState => !previousState);
    setDarkMode(prevColor => (prevColor === 'black' ? 'blue' : 'black'));
  }
  const [ darkmode, setDarkMode ] = useState('black');

  return (
      <ScrollView style={styles.body}>
        <View style={{ alignItems: "flex-end" }}>
          <TextInput style={{ width: "100%" }} />
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />  
        </View>
          <RecipeScreen />  
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#fac7b4',
  }
});
