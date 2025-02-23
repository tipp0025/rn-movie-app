import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import RentedScreen from "../screens/RentedScreen";
import WatchScreen from "../screens/WatchScreen";
import { useTheme } from "@rneui/themed";

const Stack = createStackNavigator();

function AppNavigator() {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: theme.components.Header.containerStyle,
          headerTitleStyle: theme.components.Header.centerComponentStyle,
          headerTintColor: "#F3EAC0",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rented" component={RentedScreen} />
        <Stack.Screen name="Watch" component={WatchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
