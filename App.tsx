import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import { InitialRoutes } from "./src/Routes";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import theme from "./src/theme";
import { setNewTable } from "./src/api/api";
export default function App() {
  const deviceTheme = useColorScheme();
  const setTable = async () => {
    await setNewTable({
      id: 3,
      clientsNumber: 4,
      products: [],
      status: "aprovado",
    });
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme.light}>
        <InitialRoutes />
      </ThemeProvider>
    </Provider>
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
