import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  Container,
  Title,
  InputsContainer,
  NameInput,
  InputWrapper,
} from "./style";
import { Feather } from "@expo/vector-icons";

export const GetName = () => {
  return (
    <Container>
      <Title>Precisamos Saber seu nome</Title>
      <InputsContainer>
        <InputWrapper>
          <Feather name="user" size={20} color="green" />
          <NameInput placeholder="useless placeholder" />
        </InputWrapper>
      </InputsContainer>
    </Container>
  );
};
