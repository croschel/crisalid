import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 10px;
`;

export const FormInput = styled.TextInput`
  margin-bottom: 10px;
  padding: 0 15px;
  height: 46px;
  background: rgba(0,0,0,0.1);
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const SubmitButton = styled(RectButton)`
  height: 46px;
  background: #3bbfff;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-self: center;
`;