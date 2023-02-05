import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "white" }}>
        <StatusBar barStyle="default" />
        {children}
      </View>
    </SafeAreaView>
  );
};
