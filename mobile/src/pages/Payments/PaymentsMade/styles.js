import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderBox = styled.View`
  justify-content: center;
  border: 1px dashed #f1f1f1;
  border-radius: 4px;
  margin: 10px auto;
  padding: 10px;
  background: #00418C;
`;
export const Points = styled.Text`
  font-size: 30px;
  color: #fff;
`;
export const LabelPoints = styled.Text`
  color: ${darken(0.3, "#fff")};
  font-size: 10px;
`;
export const PaymentBox = styled.View`
  border: 1px solid #00418C;
  background: #00418C;
  padding: 10px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  `;
export const LeftBox = styled.View`
  color: ${darken(0.3, "#fff")};
`;
export const TextInfo = styled.Text`
  color: ${darken(0.3, "#fff")};

`;