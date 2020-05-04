import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from 'react-native-elements';
import Background from '~/components/Background';

import {
  Container, PaymentBox, PaymentText, Payment, Value, Counter,
  DetailsButton, AddButton
} from './styles';

function Payments() {
  return (
    <Background>
      <Header
        centerComponent={{ text: "PAGAMENTOS", style: { fontFamily: "serif", color: '#fff', fontSize: 18, marginBottom: 20 } }}
        containerStyle={{ marginBottom: 20, backgroundColor: '#00418C', borderBottomWidth: 0, height: 70 }}
      />
      <Container>
        <DetailsButton onPress={() => { }}>
          <PaymentBox style={{ elevation: 10 }}>
            <PaymentText>Pagamentos Efetuados</PaymentText>
            <Payment>
              <Value>R$ 1.000,00</Value>
              <Counter>12 Pagamentos</Counter>
            </Payment>
          </PaymentBox>
        </DetailsButton>
        <DetailsButton onPress={() => { }}>
          <PaymentBox style={{ elevation: 10 }}>
            <PaymentText>Pagamentos Agendados</PaymentText>
            <Payment>
              <Value>R$ 300,00</Value>
              <Counter>5 Pagamentos</Counter>
            </Payment>
          </PaymentBox>
        </DetailsButton>
        <AddButton>
          <Icon name="add" size={68} color="#FFF" />
        </AddButton>
      </Container>
    </Background >
  );
}

Payments.navigationOptions = {
  tabBarLabel: 'Pagamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="monetization-on" size={30} color={tintColor} />
  )
}

export default withNavigationFocus(Payments);
