import styled from "styled-components/native";
export const Container = styled.View`
  padding: 20px 20px;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 20px;
  margin-top: -100px;
`;
export const InputsContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
export const NameInput = styled.TextInput`
  padding: 15px;
  border-radius: 5px;
  margin-left: 10px;
`;
export const Line = styled.View`
  width: 150px;
  height: 3px;
  margin-left: 40px;
  margin-top: -10px;
  background: rgba(80, 79, 73, 0.65);
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
