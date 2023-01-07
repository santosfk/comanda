import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Checkin } from "../Screens/Checkin";
import { HomeRoutes } from "./HomeRoutes";
import { GetName } from "../Screens/GetName";
import { TableScreen } from "../Screens/TableScreen";
const { Screen, Navigator } = createNativeStackNavigator();
export const CheckinRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: "#26A58E",
      }}
    >
      <Screen name="checkin" component={Checkin} />
      <Screen name="getName" component={GetName} />
      <Screen  name="homeRoutes" component={HomeRoutes} />
      <Screen  name="tableScreen" component={TableScreen} />
    </Navigator>
  );
};
