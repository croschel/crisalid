import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const DetailsButton = styled.TouchableOpacity`
  width: 95%;
  margin: 10px auto;
`;

export const PaymentBox = styled.View`
  border: 1px solid #00418C;
  background: #00418C;
  padding: 10px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const PaymentText = styled.Text`
  color: #fff;
  font-family: "serif";
`;
export const Payment = styled.View`
  justify-content: center;
`;
export const Value = styled.Text`
  font-size: 28px;
  color: #fff;
`;

export const Counter = styled.Text`
  color: #fff;
  text-align: center;
`;

export const AddButton = styled.TouchableOpacity`
  border: 1px solid #FFF;
  border-radius: 45px;
  margin: 0 auto;
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;