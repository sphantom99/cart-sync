import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>home</Text>
      <Link href="/modal">Present Modal</Link>
    </View>
  );
}
