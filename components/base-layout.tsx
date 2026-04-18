import React, { FC } from "react";
import { View, StatusBar, Text, SafeAreaView } from "react-native";

export const BaseLayout: FC = ({ children }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <StatusBar barStyle="default" />
    {children}
  </SafeAreaView>
);
