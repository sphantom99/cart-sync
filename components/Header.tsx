import { View, Text, Image } from "react-native";
import React from "react";
import image from "../assets/Logo.png";
import { Link } from "expo-router";
import { Avatar, useTheme } from "react-native-paper";
export default function Header() {
  const theme = useTheme();
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme.colors.background,
        width: "90%",
      }}
    >
      <Link href="/home">
        <Image
          style={{ width: 100, height: 40, objectFit: "fill" }}
          source={image}
          alt="logo"
        />
      </Link>
      <Avatar.Icon size={24} icon="account-circle" />
    </View>
  );
}
