import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import {
  Container,
  Title,
  InputsContainer,
  NameInput,
  InputWrapper,
  Line,
} from "./style";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../Routes/models";
export const GetName = () => {
  const [userIconColor, setUserIconColor] = useState("#000");
  const userIconIsFocused = () => {
    setUserIconColor("#2EDBBC");
  };
  const navigation = useNavigation<propsStack>();
  const goToHome = () => {
    navigation.navigate("home");
  };
 
  return (
    <Container>
      <Title>Precisamos Saber seu nome</Title>
      <InputsContainer>
        <InputWrapper>
          <FontAwesome name="user" size={22} color={userIconColor} />
          <NameInput
            placeholder="digite seu nome"
            placeholderTextColor="rgba(16, 216, 168, 0.37)"
            onFocus={userIconIsFocused} 
          />
        </InputWrapper>
        <Line />
      </InputsContainer>
          <Button bgColor="#2EDBBC" color="white" onPress={goToHome}>Continuar</Button>
    </Container>
  );
};
