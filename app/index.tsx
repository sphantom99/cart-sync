import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../assets/Logo.png";
import { router } from "expo-router";
export default function index() {
  const theme = useTheme();
  useEffect(() => {
    setTimeout(() => {
      router.push("home");
    }, 2000);
  });
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: theme.colors.background,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={image} alt="logo" />
      </View>
    </SafeAreaView>
  );
}
