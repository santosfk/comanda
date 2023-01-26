import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import { InitialRoutes } from "./src/Routes";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import theme from "./src/theme";
import { DeleteTable, setNewTable } from "./src/api/api";
import { QueryClient, QueryClientProvider } from "react-query";
export default function App() {
  const queryClient = new QueryClient();
  const deviceTheme = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme.light}>
          <InitialRoutes />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
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
