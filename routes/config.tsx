import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "../modules/authentication";
import { HomeScreen } from "../modules/home";

const Stack = createNativeStackNavigator();

const isAuthenticated = false;

export const Routing: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="login" component={LoginScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="home" component={HomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
