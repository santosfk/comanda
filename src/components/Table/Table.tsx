import { View, Text, useWindowDimensions } from "react-native";
import { Container, ClientsNumber, Status, TableTitle } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

type TableProps = {
  id: number;
  status: string;
  clientsNumber: number;
};
export const Table = ({ clientsNumber, id, status }: TableProps) => {
  const window = useWindowDimensions();
  return (
    <Container width={window.width}>
      <TableTitle>Mesa {id}</TableTitle>
      <Status>{status}</Status>
      <ClientsNumber>
        <Text>{clientsNumber}</Text>
        <FontAwesome name="user" style={{marginLeft:10}} size={20} color="#2EDBBC" />
      </ClientsNumber>
    </Container>
  );
};
