import { View, Text } from "react-native";
import React from "react";
import { Container, WrapperItems, NameStyled, PriceStyled } from "./style";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  name: string;
  price: number;
};
export const ProductItem = ({ name, price }: Props) => {
  return (
    <Container>
      <WrapperItems>
        <NameStyled>{name}</NameStyled>
        <PriceStyled>{price}</PriceStyled>
      </WrapperItems>
      <WrapperItems>
        <FontAwesome5 name="trash" size={24} color="red" />
        <FontAwesome5 name="edit" size={24} color="#5F5959" />
      </WrapperItems>
    </Container>
  );
};
