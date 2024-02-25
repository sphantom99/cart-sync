import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import Header from "../components/Header";
export default function Layout() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#32FD6B",
      background: "#004051",
    },
  };
  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="home"
          options={{
            headerShown: true,
            headerTitle: (props) => <Header />,
          }}
        />

        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </PaperProvider>
  );
}
