import styled from "styled-components/native";
import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("screen").width;
export const Container = styled.View`
  width: ${width - 20}px;
  background-color: ${({ theme }) => theme.background_green_100};
  padding: 10px 30px;
  margin-bottom: 30px;
`;
export const WrapperItems = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;
export const NameStyled = styled.Text`
  color: #5f5959;
  font-size: 20px;
  font-weight: bold;
  flex: 1;
`;
export const PriceStyled = styled.Text`
  color: #26a58e;
  font-size: 16px;
  font-weight: bold;
  width: 100px;
`;
export const IconButtons = styled.TouchableOpacity<{
  bgColor?: string;
}>`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
  padding: 10px 20px;
  border-radius: 10px;
`;
