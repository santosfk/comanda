import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Checkin } from "../Screens/Checkin";
import { HomeRoutes } from "./HomeRoutes";
import { GetName } from "../Screens/GetName";
const { Screen, Navigator } = createNativeStackNavigator();
export const CheckinRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: "#26A58E",
      }}
    >
      <Screen name="checkin" component={Checkin} />
      <Screen name="getName" component={GetName} />
      <Screen name="home" component={HomeRoutes} />
    </Navigator>
  );
};
