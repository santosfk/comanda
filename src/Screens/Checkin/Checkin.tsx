import React from "react";
import {
  Container,
  EnterButton,
  ButtonWrapper,
  LogoText,
  LogoWrapper
} from "./style";
import { useNavigation } from "@react-navigation/native";
import { Text,Image } from "react-native";
import { propsStack } from "../../Routes/models";
import  MaterialCommunityIcons  from '@expo/vector-icons/MaterialCommunityIcons';
import { Button } from "../../components/Button";
export const Checkin = () => {
  const navigation = useNavigation<propsStack>();
  const goToHome = () => {
    navigation.navigate("getName");
  };
  return (
    <Container>
      <LogoWrapper>
      <Image
        
        source={require('../../assets/comanda-logo.png')}
      />
        <LogoText>
        ANOTE SEUS PEDIDOS SEM ERRO!!
        </LogoText>
      </LogoWrapper>
      <ButtonWrapper>
          <Button onPress={goToHome} color="white" bgColor="#2EDBBC">Entrar</Button>   
      </ButtonWrapper>
      <MaterialCommunityIcons name='hamburger' size={50} color='#26A58E'/>
    </Container>
  );
};
