import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
`;

export const BoxLine = styled.View`
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
`;

export const GameBox = styled.View`
  width: 48%;
  border: 1px solid #00418C;
  background: #00418C;
  border-radius: 4px;
  padding: 5px;
`;
export const GameName = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 28px;
  margin-bottom: 5px;
`;
export const Description = styled.Text`
  text-align: center;
  color: ${darken(0.4, '#fff')};
`;

export const IconBox = styled.View`
  margin: 0 auto;
`;