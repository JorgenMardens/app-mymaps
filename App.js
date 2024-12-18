import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/pages/Home";
import Chapters from "./src/pages/Chapters";
import Verses from "./src/pages/Verses";
// teste
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Inicio" }}
      />
      <Stack.Screen
        name="Chapters"
        component={Chapters}
        options={{ title: "Capitulos" }}
      />
      <Stack.Screen
        name="Verses"
        component={Verses}
        options={{ title: "Versos" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
