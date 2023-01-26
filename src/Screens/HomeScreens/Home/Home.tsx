import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Container } from "./style";
import table from "../../../mocks/table.json";
import { TableItem } from "../../../components/Table/Table";
import { setTablesData } from "../../../redux/allTableData";
import { AddModal } from "../../../components/AddModal";
import { Button } from "../../../components/Button";
import { useTablesData } from "../../../utils/getTablesData";
import tables from "../../../mocks/table.json";
import { useInitialData } from "../../../utils/setInitialData";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../Routes/models";
import { DeleteTable, getTables, setNewTable } from "../../../api/api";
import { Table } from "../../../models/Table";
import { useQuery } from "react-query";

export const Home = () => {
  const [modalOn, setModalOn] = useState(false);
  const [tablesData, setTablesData] = useState<Table[]>();
  const { data, isLoading } = useQuery("getTables", getTables);

  useInitialData();
  const navigation = useNavigation<propsStack>();
  const setTables = async () => {
    try {
      setNewTable({
        clientsNumber: 4,
        products: [
          {
            name: "batata",
            price: 20,
          },
        ],
        status: "anotado",
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      {isLoading && <Text>carregando</Text>}
      {modalOn && <AddModal />}
      <ScrollView>
        <FlatList
          style={{ paddingTop: 50 }}
          data={data}
          ListHeaderComponent={<Text>Mesas</Text>}
          ListFooterComponent={
            <Button
              fontSize={12}
              bgColor="#2EDBBC"
              color="white"
              onPress={() => navigation.navigate("addTable")}
            >
              Adicionar
            </Button>
          }
          renderItem={({ item, index }) => (
            <TableItem
              key={index}
              clientsNumber={item.clientsNumber}
              id={item.id}
              products={item.products}
              status={item.status}
            />
          )}
        />
      </ScrollView>
    </Container>
  );
};
