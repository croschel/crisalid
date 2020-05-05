import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Text } from 'react-native';
import Background from '~/components/Background';
import logo from '~/assets/logo-crisalid.png';
import { Container, HText, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

import { signUpRequest, signFailure } from '~/store/modules/auth/actions';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const loading = useSelector(state => state.auth.loading);

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password, confirmPassword));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} style={{ width: 150, height: 150 }} />
        <HText>CRISALID</HText>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua Senha"
            ref={confirmPasswordRef}
            returnKeyType="next"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={handleSubmit}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme sua Senha"
            ref={passwordRef}
            returnKeyType="send"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            <Text>Cadastrar</Text>
          </SubmitButton>
          <SignLink onPress={() => navigation.navigate('SignIn')} >
            <SignLinkText>Já possui uma conta?</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
