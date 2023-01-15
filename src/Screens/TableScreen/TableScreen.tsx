import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  AtributesTitle,
  ClientsValue,
  ProductsWrapper,
  StatusValue,
  TitlePage,
  AtributesWrapper,
  TopScreenContainer,
} from "./style";
import { statusColor } from "../../utils/getStatusColor";
import { ProductItem } from "../../components/ProductItem";
type TopScreenProps = {
  id: number;
  status: string;
  clientsNumber: number;
};
const TopScreen = ({ clientsNumber, id, status }: TopScreenProps) => {
  return (
    <>
      <TopScreenContainer>
        <TitlePage>Mesa{id}</TitlePage>
        <AtributesWrapper>
          <AtributesTitle>Status</AtributesTitle>
          <StatusValue color={statusColor(status)}>{status}</StatusValue>
        </AtributesWrapper>
        <AtributesWrapper>
          <AtributesTitle>Clientes</AtributesTitle>
          <ClientsValue>{clientsNumber}</ClientsValue>
        </AtributesWrapper>
        <AtributesTitle style={{ width: "100%", textAlign: "center" }}>
          Pedidos
        </AtributesTitle>
      </TopScreenContainer>
    </>
  );
};
export const TableScreen = () => {
  const { id, status, clients_number, products } = useSelector(
    (state: any) => state.setTableInfo
  );
  console.log(products);
  return (
    <Container>
      <FlatList
        style={{ flex: 1, paddingTop: 30 }}
        data={products}
        ListHeaderComponent={
          <TopScreen clientsNumber={clients_number} status={status} id={id} />
        }
        renderItem={({ item }) => (
          <ProductItem name={item.name} price={item.price} />
        )}
      />
    </Container>
  );
};
