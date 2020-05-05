import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Image, Text } from 'react-native';
import logo from '~/assets/logo-crisalid.png';
import { Container, HText, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn({ navigation }) {
  // States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Dispatch for Redux
  const dispatch = useDispatch();

  // Ref for Accessibility
  const passwordRef = useRef();

  // Login on App
  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Image source={logo} style={{ width: 150, height: 150 }} />
      <HText>CRISALID</HText>
      <Form>
        <FormInput
          placeholder="Informe seu email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <FormInput
          placeholder="Informe sua senha"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="send"
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={handleSubmit}
        />
        <SubmitButton onPress={handleSubmit}>
          <Text>Entrar no Sistema</Text>
        </SubmitButton>
        <SignLink onPress={() => navigation.navigate('SignUp')} >
          <SignLinkText >Criar conta gratuita</SignLinkText>
        </SignLink>
      </Form>
    </Container>
  );
}
