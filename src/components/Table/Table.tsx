import { View, Text, useWindowDimensions, Pressable } from "react-native";
import { Container, ClientsNumber, Status, TableTitle } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useDispatch } from "react-redux";
import { setTableInfo } from "../../redux/tableSelectedData";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../Routes/models";
import { statusColor } from "../../utils/getStatusColor";
import { Table } from "../../models/Table";
import { DeleteTable } from "../../api/api";
export const TableItem = (data: Table) => {
  const dispatch = useDispatch();
  const window = useWindowDimensions();
  const navigation = useNavigation<propsStack>();
  const goToTableScreen = () => {
    navigation.navigate("tableScreen");
  };
  const setTablePost = () => {
    console.log(data);
    const tableData = {
      id: data.id,
      status: data.status,
      clients_number: data.clientsNumber,
      products: data.products,
    };
    dispatch(setTableInfo(tableData));
  };
  const postClicked = () => {
    setTablePost();
    goToTableScreen();
  };
  const handleDeleteTable = async () => {
    console.log(data.id);
    try {
      DeleteTable(data.id ? data.id : 0);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container onPress={() => postClicked()}>
      <TableTitle>Mesa {data.id}</TableTitle>
      <Status color={statusColor(data.status)}>{data.status}</Status>
      <ClientsNumber>
        <Text>{data.clientsNumber}</Text>
        <FontAwesome
          name="user"
          style={{ marginLeft: 10 }}
          size={20}
          color="#2EDBBC"
        />
      </ClientsNumber>
      <Pressable onPress={handleDeleteTable}>
        <FontAwesome name="trash" size={20} />
      </Pressable>
    </Container>
  );
};
