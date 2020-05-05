import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import Background from '~/components/Background';
import { Container, CourseBox, HeaderBox, HeaderName, Duration, Description } from './styles';

function Courses({ navigation }) {
  return (
    <Background>
      <Container>
        <CourseBox onPress={() => navigation.navigate('SelectedCourse')} style={{ elevation: 5 }}>
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
  title: "CURSOS",
  headerTintColor: "#fff",
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#00418C",
    elevation: 0,
  }
}

export default withNavigationFocus(Courses)