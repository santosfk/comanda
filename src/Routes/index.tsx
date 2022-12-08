import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CheckinRoutes } from "./stack.routes";
export const InitialRoutes = () => {
  return (
    <NavigationContainer
    
    >
      <CheckinRoutes />
    </NavigationContainer>
  );
};
