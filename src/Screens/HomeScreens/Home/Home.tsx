import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { Container } from "./style";
import table from "../../../mocks/table.json";
import { Table } from "../../../components/Table";
import { setTablesData } from "../../../redux/allTableData";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const tableData = table;
  dispatch(setTablesData(tableData));
  const { data } = useSelector((state: any) => state.tablesData);
  console.log(data)
  return (
    <Container>
      <FlatList
        style={{ paddingTop: 50 }}
        data={data}
        ListHeaderComponent={<Text>Mesas</Text>}
        renderItem={({ item }) => <Table key={item.id} data={item} />}
      />
    </Container>
  );
};

