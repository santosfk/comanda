import styled from "styled-components/native";

export const StyledButton = styled.Pressable<{
  bgColor: string;
  color?: string;
}>`
  background-color: ${({ bgColor }) => bgColor};
  align-items: center;
  justify-content: center;
  border-radius: 10;

`;
export const Text = styled.Text<{
  color?:string
}>`
color: ${({color})=>color? color:'black'};
font-weight: bold;
font-size: 22px;
padding: 20px 100px;
text-transform: uppercase;
`
