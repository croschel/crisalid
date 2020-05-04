import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from 'react-native-elements';
import Background from '~/components/Background';
import { Text } from 'react-native';

import { Container, BoxLine, GameBox, GameName, Description, IconBox } from './styles';
function Games() {
  return (
    <Background>
      <Header
        centerComponent={{ text: "Jogos", style: { fontFamily: "serif", color: '#fff', fontSize: 18, marginBottom: 20 } }}
        containerStyle={{ marginBottom: 20, backgroundColor: '#00418C', borderBottomWidth: 0, height: 70 }}
      />
      <Container>
        <BoxLine>
          <GameBox style={{ elevation: 5 }}>
            <IconBox>
              <Icon name="casino" size={70} color="red" />
            </IconBox>
            <GameName>ROLETA</GameName>
            <Description>
              Selecione sua aposta aperte o botão GO!
          </Description>
          </GameBox>
          <GameBox style={{ elevation: 5 }}>
            <IconBox>
              <Icon name="live-help" size={70} color="green" />
            </IconBox>
            <GameName>QUIZ</GameName>
            <Description>
              Escolha as respostas corretas!
          </Description>
          </GameBox>
        </BoxLine>
        <BoxLine>
          <GameBox style={{ elevation: 5 }}>
            <IconBox>
              <Icon name="touch-app" size={70} color="purple" />
            </IconBox>
            <GameName>CORES</GameName>
            <Description>
              Acerte as cores corretas nos respectivos momentos!
          </Description>
          </GameBox>
          <GameBox style={{ elevation: 5 }}>
            <IconBox>
              <Icon name="style" size={70} color="yellow" />
            </IconBox>
            <GameName>CARTAS</GameName>
            <Description>
              Que tal um jogo de adivinhação?
          </Description>
          </GameBox>
        </BoxLine>
      </Container>
    </Background>
  );
}

Games.navigationOptions = {
  tabBarLabel: 'Jogos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="videogame-asset" size={30} color={tintColor} />
  )
}

export default withNavigationFocus(Games)