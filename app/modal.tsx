import { View, Text } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

export default function Modal() {
  const isPresented = router.canGoBack();
  return (
    <View>
      <Text>signupModal</Text>
      {!isPresented && <Link href="../">Go Back</Link>}
      <Text>signupModal</Text>
      <Text>signupModal</Text>
    </View>
  );
}
