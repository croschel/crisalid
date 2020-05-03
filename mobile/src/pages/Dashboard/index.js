import React from 'react';
import { StatusBar, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Background from '~/components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, Header, LeftHeader, Avatar, TextName, ClientRate,
  ClientName, ClientPoints, RightHeader, LogoutButton, Expense, TopInfo,
  BottomInfo, InfoText, DateExpenses, DateText
} from './styles';

function Dashboard() {
  function handleLogout() { }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#00418C" />
      <Container>
        <Header>
          <LeftHeader>
            <Avatar source={{ uri: "https://api.adorable.io/avatars/100/crisalid.png" }} />
            <TextName>
              <ClientName>Caique Roschel</ClientName>
              <ClientPoints>16522pts</ClientPoints>
              <ClientRate>★★☆☆☆</ClientRate>
            </TextName>
          </LeftHeader>
          <RightHeader>
            <LogoutButton onPress={handleLogout}>
              <Icon name="exit-to-app" size={45} color="#610000" />
              <Text style={{ color: '#610000', marginLeft: 10 }}>Sair</Text>
            </LogoutButton>
          </RightHeader>
        </Header>
        <DateExpenses>
          <Icon name="event" size={30} color="#FFF" />
          <DateText>últimas 24h</DateText>
        </DateExpenses>
        <Expense style={{ elevation: 7 }}>
          <TopInfo>
            <InfoText>R$ 30,00</InfoText>
            <InfoText>19/04/2020</InfoText>
          </TopInfo>
          <BottomInfo>
            <InfoText>Posto Nações LTDA</InfoText>
            <InfoText>15:05h</InfoText>
          </BottomInfo>
        </Expense>
        <Expense style={{ elevation: 7 }}>
          <TopInfo>
            <InfoText>R$ 30,00</InfoText>
            <InfoText>19/04/2020</InfoText>
          </TopInfo>
          <BottomInfo>
            <InfoText>Posto Nações LTDA</InfoText>
            <InfoText>15:05h</InfoText>
          </BottomInfo>
        </Expense>
        <Expense style={{ elevation: 7 }}>
          <TopInfo>
            <InfoText>R$ 30,00</InfoText>
            <InfoText>19/04/2020</InfoText>
          </TopInfo>
          <BottomInfo>
            <InfoText>Posto Nações LTDA</InfoText>
            <InfoText>15:05h</InfoText>
          </BottomInfo>
        </Expense>
        <Expense style={{ elevation: 7 }}>
          <TopInfo>
            <InfoText>R$ 30,00</InfoText>
            <InfoText>19/04/2020</InfoText>
          </TopInfo>
          <BottomInfo>
            <InfoText>Posto Nações LTDA</InfoText>
            <InfoText>15:05h</InfoText>
          </BottomInfo>
        </Expense>
        <Expense style={{ elevation: 7 }}>
          <TopInfo>
            <InfoText>R$ 30,00</InfoText>
            <InfoText>19/04/2020</InfoText>
          </TopInfo>
          <BottomInfo>
            <InfoText>Posto Nações LTDA</InfoText>
            <InfoText>15:05h</InfoText>
          </BottomInfo>
        </Expense>
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={30} color={tintColor} />
  )
}

export default withNavigationFocus(Dashboard);