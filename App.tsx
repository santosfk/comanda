import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import { InitialRoutes } from "./src/Routes";
import theme from "./src/theme";
export default function App() {
  const deviceTheme = useColorScheme();

  return (
    <ThemeProvider theme={deviceTheme == "dark" ? theme.dark : theme.light}>
      <InitialRoutes />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
