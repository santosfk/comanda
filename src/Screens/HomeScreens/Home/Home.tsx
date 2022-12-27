import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { Container } from "./style";
import table from "../../../mocks/table.json";
import { Table } from "../../../components/Table";
export const Home = () => {
  return (
    <Container>
      <FlatList
        data={table.tables}
        renderItem={({ item }) => (
          <Table
            key={item.id}
            id={item.id}
            clients={item.clients_number}
            status={item.status}
          />
        )}
      />
    </Container>
  );
};
