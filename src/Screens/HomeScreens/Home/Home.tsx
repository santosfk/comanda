import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { Container } from "./style";
import table from "../../../mocks/table.json";
import { Table } from "../../../components/Table";
export const Home = () => {
  return (
    <Container>
      <FlatList
        style={{ paddingTop: 50 }}
        data={table.tables}
        ListHeaderComponent={<Text>Mesas</Text>}
        renderItem={({ item }) => (
          <Table
            key={item.id}
           data={item}
          />
        )}
      />
    </Container>
  );
};
