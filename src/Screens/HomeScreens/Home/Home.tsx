import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Container } from "./style";
import table from "../../../mocks/table.json";
import { Table } from "../../../components/Table";
import { setTablesData } from "../../../redux/allTableData";
import { AddModal } from "../../../components/AddModal";
import { Button } from "../../../components/Button";
import { useTablesData } from "../../../utils/getTablesData";
import tables from "../../../mocks/table.json";
import { useInitialData } from "../../../utils/setInitialData";

export const Home = () => {
  const [modalOn, setModalOn] = useState(false);
  useInitialData();
  const { data } = useTablesData();
  return (
    <Container>
      {modalOn && <AddModal />}
      <FlatList
        style={{ paddingTop: 50 }}
        data={data}
        ListHeaderComponent={<Text>Mesas</Text>}
        renderItem={({ item }) => <Table key={item.id} data={item} />}
      />
      <Button
        fontSize={12}
        bgColor="#2EDBBC"
        color="white"
        onPress={() => console.log("clicado")}
      >
        Adicionar
      </Button>
    </Container>
  );
};
