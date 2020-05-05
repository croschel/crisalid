import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from 'react-native-elements';
import Background from '~/components/Background';

import {
  Container, PaymentBox, PaymentText, Payment, Value, Counter,
  DetailsButton, AddButton
} from './styles';

function Payments({ navigation }) {
  return (
    <Background>
      <Container>
        <DetailsButton onPress={() => navigation.navigate('PaymentsMade')}>
          <PaymentBox style={{ elevation: 10 }}>
            <PaymentText>Pagamentos Efetuados</PaymentText>
            <Payment>
              <Value>R$ 1.000,00</Value>
              <Counter>12 Pagamentos</Counter>
            </Payment>
          </PaymentBox>
        </DetailsButton>
        <DetailsButton onPress={() => navigation.navigate('PaymentsScheduled')}>
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
  title: 'PAGAMENTOS',
  headerTintColor: "#FFF",
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: '#00418C',
    elevation: 0,
  },
  headerTitleStyle: {
    fontWeight: 'bold',

  }
}

export default withNavigationFocus(Payments);
