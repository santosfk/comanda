import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary_background};
  padding-bottom: 30px;
`;
export const LoadingText = styled.Text`
  flex: 1;
  font-size: 20px;
  color: ${({ theme }) => theme.primary_text};
  font-weight: bold;
  position: absolute;
  z-index: 2;
`;
export const AddButtonWrapper = styled.View`
  margin-top: 12px;
`;
