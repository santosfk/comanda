import styled from "styled-components/native";
 export const Container = styled.View`
justify-content: space-around;
align-items: center;
flex: 1;
 `
 export const EnterButton  = styled.Pressable`
 background-color: red;
align-items: center;
justify-content: center;
padding: 30px 100px;
border-radius: 15;
 `
 export const ExitButton = styled.Pressable`
background-color: black;
align-items: center;
justify-content: center;
padding: 30px 100px;
border-radius: 15;
 `
 export const ButtonText = styled.Text`
 font-weight: bold;
 color: white;
 font-size: 28;
 `
 export const ButtonWrapper = styled.View`
 height: 300px;
 flex-direction: column;
 align-items: center;
justify-content: space-evenly;
 `
 export const LogoWrapper = styled.View`
justify-content: center;
align-items: center;
 `
 export const LogoText =styled.Text`
 color: red;
 `