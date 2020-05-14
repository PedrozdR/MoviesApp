import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import Details from "./screens/details";
import { Theme } from "@react-navigation/native/lib/typescript/src/types";
import getTheme from "./utils/themes";
import { useColorScheme } from "react-native-appearance";

export default function Routes() {
  const Stack = createStackNavigator();
  const scheme = useColorScheme();
  const theme = getTheme(scheme)

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
      }}>
      <Stack.Screen name="Home" component={Home} options={{
        title: "Filmes"
      }} />
      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}