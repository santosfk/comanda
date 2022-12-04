import React from "react";
import {
  Container,
  EnterButton,
  ButtonText,
  ButtonWrapper,
  ExitButton,
  LogoText,
  LogoWrapper
} from "./style";
import { useNavigation } from "@react-navigation/native";
import { Text,Image } from "react-native";
import { propsStack } from "../../Routes/models";
import  MaterialCommunityIcons  from '@expo/vector-icons/MaterialCommunityIcons';

export const Checkin = () => {
  const navigation = useNavigation<propsStack>();
  const goToHome = () => {
    navigation.navigate("home");
  };
  return (
    <Container>
      <LogoWrapper>
      <Image
        
        source={require('../../assets/comanda.png')}
      />
        <LogoText>
        ANOTE SEUS PEDIDOS SEM ERRO!!
        </LogoText>
      </LogoWrapper>
      <ButtonWrapper>
        <EnterButton onPress={goToHome}>
          <ButtonText>Entrar</ButtonText>
        </EnterButton>
        <ExitButton onPress={goToHome}>
          <ButtonText>Sair</ButtonText>
        </ExitButton>
      </ButtonWrapper>
      <MaterialCommunityIcons name='hamburger' size={50} color='black'/>
    </Container>
  );
};
