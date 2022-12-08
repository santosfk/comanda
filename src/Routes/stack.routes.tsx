import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Checkin } from "../Screens/Checkin";
import { HomeRoutes } from "./HomeRoutes";
const { Screen, Navigator } = createNativeStackNavigator();
export const CheckinRoutes = () => {
  return (
    <Navigator>
      <Screen name="checkin" component={Checkin} />
      <Screen name="home" component={HomeRoutes} />
    </Navigator>
  );
};
