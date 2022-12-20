import styled from "styled-components/native";

export const StyledButton = styled.Pressable<{
  bgColor: string;
  color?: string;
}>`
  background-color: ${({ bgColor }) => bgColor};
  align-items: center;
  justify-content: center;
  padding: 20px 100px;
  border-radius: 10;
`;
