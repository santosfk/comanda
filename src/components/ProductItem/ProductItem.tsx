import { View, Text } from "react-native";
import React from "react";
import {
  Container,
  WrapperItems,
  NameStyled,
  PriceStyled,
  IconButtons,
} from "./style";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  name: string;
  price: number;
};
export const ProductItem = ({ name, price }: Props) => {
  price.toFixed(2);
  return (
    <Container>
      <WrapperItems>
        <NameStyled>{name}</NameStyled>
        <PriceStyled>R${price}</PriceStyled>
      </WrapperItems>
      <WrapperItems>
        <IconButtons bgColor="black">
          <FontAwesome5 name="trash" size={20} color="red" />
        </IconButtons>
        <IconButtons bgColor="#26a58e">
          <FontAwesome5 name="edit" size={20} color="white" />
        </IconButtons>
      </WrapperItems>
    </Container>
  );
};
