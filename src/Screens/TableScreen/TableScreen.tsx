import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
export const TableScreen = () => {
  const { id, status, clients_number, products } = useSelector(
    (state: any) => state.setTableInfo
  );
  console.log(id, status, clients_number, products)
  return (
    <View>
      <Text>TableScreen</Text>
    </View>
  );
};
