import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';
import { Header } from 'react-native-elements';
import Background from '~/components/Background';
import { Container, CourseBox, HeaderBox, HeaderName, Duration, Description } from './styles';

function Courses() {
  return (
    <Background>
      <Header
        centerComponent={{ text: "Cursos", style: { fontFamily: "serif", color: '#fff', fontSize: 18, marginBottom: 20 } }}
        containerStyle={{ marginBottom: 20, backgroundColor: '#00418C', borderBottomWidth: 0, height: 70 }}
      />
      <Container>
        <CourseBox style={{ elevation: 5 }}>
          <HeaderBox>
            <HeaderName>Curso 01</HeaderName>
            <Duration>Duração: 1 hora</Duration>
          </HeaderBox>
          <Description>Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra diam eget quam feugiat libero risus a. Penatibus dolor id nulla</Description>
        </CourseBox>
        <CourseBox style={{ elevation: 5 }}>
          <HeaderBox>
            <HeaderName>Curso 02</HeaderName>
            <Duration>Duração: 1 hora</Duration>
          </HeaderBox>
          <Description>Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra diam eget quam feugiat libero risus a. Penatibus dolor id nulla</Description>
        </CourseBox>
        <CourseBox style={{ elevation: 5 }}>
          <HeaderBox>
            <HeaderName>Curso 03</HeaderName>
            <Duration>Duração: 1 hora</Duration>
          </HeaderBox>
          <Description>Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra diam eget quam feugiat libero risus a. Penatibus dolor id nulla</Description>
        </CourseBox>
        <CourseBox style={{ elevation: 5 }}>
          <HeaderBox>
            <HeaderName>Curso 04</HeaderName>
            <Duration>Duração: 1 hora</Duration>
          </HeaderBox>
          <Description>Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra diam eget quam feugiat libero risus a. Penatibus dolor id nulla</Description>
        </CourseBox>
      </Container>
    </Background>
  );
}

Courses.navigationOptions = {
  tabBarLabel: 'Cursos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="import-contacts" size={30} color={tintColor} />
  )
}

export default withNavigationFocus(Courses)