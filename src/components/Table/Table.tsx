import { View, Text } from "react-native";
import { Container } from "./style";
import React from "react";
type TableProps = {
  id: number;
  status: string;
  clients: number;
};
export const Table = ({ clients, id, status }: TableProps) => {
  return (
    <Container>
      <Text>Table</Text>
    </Container>
  );
};
