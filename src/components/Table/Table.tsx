import { View, Text, useWindowDimensions } from "react-native";
import { Container, ClientsNumber, Status, TableTitle } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useDispatch } from "react-redux";
import { setTableInfo } from "../../redux/tableSelectedData";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../Routes/models";
import { statusColor } from "../../utils/getStatusColor";
type TableProps = {
  data:{
    id:number,
    status:string,
    clients_number:number,
    products:{
      product:{
        name:string,
        price:number
      }
    }[]
  }
};
export const Table = ({ data}:TableProps ) => {
  const dispatch = useDispatch();
  const window = useWindowDimensions();
  const navigation = useNavigation<propsStack>();
  const goToTableScreen = () => {
    navigation.navigate("tableScreen");
  };
  const setTablePost = () =>{
    const tableData = {
      id: data.id,
      status:data.status,
      clients_number: data.clients_number,
      products:data.products,
    };
    dispatch(setTableInfo(tableData));
  }
  const postClicked = () =>{
    setTablePost()
    goToTableScreen()
  }
  return (
    <Container onPress={postClicked} >
      <TableTitle>Mesa {data.id}</TableTitle>
      <Status color={statusColor(data.status)}>{data.status}</Status>
      <ClientsNumber>
        <Text>{data.clients_number}</Text>
        <FontAwesome name="user" style={{marginLeft:10}} size={20} color="#2EDBBC" />
      </ClientsNumber>
    </Container>
  );
};
