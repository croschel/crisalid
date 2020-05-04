import React from 'react';
import { View } from 'react-native';
import Background from '~/components/Background';
import { Container, HeaderBox, Points, LabelPoints, PaymentBox, LeftBox, TextInfo } from './styles';


export default function PaymentsScheduled() {
  return (
    <Background>
      <Container>
        <HeaderBox style={{ elevation: 10 }}>
          <Points>120 pts</Points>
          <LabelPoints>pontuação atual</LabelPoints>
        </HeaderBox>
        <PaymentBox>
          <LeftBox>
            <TextInfo>20-05-2020</TextInfo>
            <TextInfo>Curso Concluido</TextInfo>
          </LeftBox>
          <Points>10 pts</Points>
        </PaymentBox>
      </Container>
    </Background>
  );
}

PaymentsScheduled.navigationOptions = {
  title: "Pagamentos Agendados",
  headerTintColor: "#fff",
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#00418C",
    elevation: 0
  }
}

