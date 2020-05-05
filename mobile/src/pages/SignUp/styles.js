import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const HText = styled.Text`
  font-size: 38px;
  font-weight: bold;
  color: #fff;
  font-family: 'serif';
`;


export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const FormInput = styled.TextInput`
  margin-bottom: 10px;
  padding: 0 15px;
  height: 46px;
  background: rgba(0,0,0,0.2);
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const SubmitButton = styled.TouchableOpacity`
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

