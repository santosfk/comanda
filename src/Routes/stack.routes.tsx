import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Checkin } from "../Screens/Checkin";
import { ClientScreen } from "../Screens/ClientScreen";
import { WaiterScreen } from "../Screens/WaiterScreen";
const { Screen, Navigator } = createNativeStackNavigator();
export const CheckinRoutes = () => {
  return (
    <Navigator>
      <Screen name="Checkin" component={Checkin} />
      <Screen name="client" component={ClientScreen} />
      <Screen name="Waiter" component={WaiterScreen} />
    </Navigator>
  );
};
