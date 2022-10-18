import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const Checkin = () => {
  const navigation = useNavigation();
  const goToClientScreen = () => {
    navigation.navigate("client");
  };
  const goToWaiterScreen = () => {
    navigation.navigate("waiter");
  };
  return (
    <View
      style={{ flex: 1, backgroundColor: "green", justifyContent: "center" }}
    >
      <Text>checkin page</Text>
      <Button title="cliente" onPress={goToClientScreen} />
      <Button title="garçom" onPress={goToWaiterScreen} />
    </View>
  );
};
