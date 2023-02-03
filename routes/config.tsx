import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "../modules/authentication";

const Stack = createNativeStackNavigator();

export const Routing: FC = () => {
  return (
    <NavigationContainer
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
