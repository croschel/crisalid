import React from 'react';
import { View, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Background from '~/components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, Header, LeftHeader, Avatar, TextName, ClientRate,
  ClientName, ClientPoints, RightHeader, LogoutButton, Expense, TopInfo,
  BottomInfo, InfoText, DateExpenses
} from './styles';

function Dashboard() {
  function handleLogout() { }

  return (
    <Background>
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
            </LogoutButton>
          </RightHeader>
        </Header>
        <DateExpenses>últimas 24h</DateExpenses>
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