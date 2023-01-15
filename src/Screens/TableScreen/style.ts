import styled from "styled-components/native";
export const Container = styled.View`
  height: 100%;
  width: 100%;
  padding: 0 30px;
`;
export const TopScreenContainer = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;
`;
export const TitlePage = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.primary};
  font-size: 20px;
  margin-bottom: 20px;
`;
export const AtributesWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const AtributesTitle = styled.Text`
  color: ${({ theme }) => theme.primary_text};
  font-size: 20px;
  font-weight: bold;
  flex: 1;
`;
export const StatusValue = styled.Text<{ color: string }>`
  color: ${({ color }) => color};
`;
export const ClientsValue = styled.Text`
  color: ${({ theme }) => theme.primary_text};
  font-weight: bold;
`;
export const ProductsWrapper = styled.View``;
