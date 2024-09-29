import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router';


export default function Layout() {
  return (
    <Stack>
        <Stack.Screen
            name="index"
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="recipes"
            options={{
                headerShown: false,
            }}
        />
    </Stack>
  )
}   