import styled from "styled-components/native";
import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("screen").width;
export const Container = styled.Pressable`
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
export const Status = styled.Text<{
    color:string
}>`
margin-bottom:35px;
color: ${({color})=> color};
font-weight: 600;
text-transform: uppercase;
font-size: 10px;
`
export const ClientsNumber = styled.View`
display: flex;
align-items: center;
flex-direction: row;
gap: 50px;

color: #5F5959;
`