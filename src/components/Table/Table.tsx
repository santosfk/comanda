import { View, Text, useWindowDimensions } from "react-native";
import { Container, ClientsNumber, Status, TableTitle } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";


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
  const window = useWindowDimensions();
  return (
    <Container width={window.width}>
      <TableTitle>Mesa {data.id}</TableTitle>
      <Status>{data.status}</Status>
      <ClientsNumber>
        <Text>{data.clients_number}</Text>
        <FontAwesome name="user" style={{marginLeft:10}} size={20} color="#2EDBBC" />
      </ClientsNumber>
    </Container>
  );
};
