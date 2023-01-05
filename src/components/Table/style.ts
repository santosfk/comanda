import styled from "styled-components/native";
import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("screen").width;
export const Container = styled.View`
width: ${width - 20}px;
background-color: ${({theme})=> theme.background_green_100};
justify-content: space-around;
align-items: center;
flex-direction: row;
margin-top: 15px;
padding: 10px 10px;
border-radius: 10px;
`
export const TableTitle = styled.Text`
font-weight: bold;
color: #5F5959;
font-size: 18px;

`
export const Status = styled.Text`
margin-bottom:35px;
color: ${({theme})=> theme.yellow};
font-weight: 600;
`
export const ClientsNumber = styled.View`
display: flex;
align-items: center;
flex-direction: row;
gap: 50px;
color: #5F5959;
`