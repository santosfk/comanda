import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Checkin } from "../Screens/Checkin";
import { Home } from "../Screens/Home";

const Tab = createBottomTabNavigator();
export const HomeRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
