import React from 'react';
import { Image, Text } from 'react-native';
import logo from '~/assets/logo-crisalid.png';
import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

export default function SignIn() {

  function handleSubmit() { }
  return (
    <Container>
      <Image source={logo} style={{ width: 150, height: 150 }} />
      <Form>
        <FormInput
          placeholder="Informe seu email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="send"
          value={null}
          onChangeText={null}
          onSubmitEditing={handleSubmit}
        />
        <FormInput
          icon="person"
          placeholder="Informe sua senha"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="send"
          value={null}
          onChangeText={null}
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
