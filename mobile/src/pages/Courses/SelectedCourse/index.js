import React from 'react';
import { View } from 'react-native';
import Background from '~/components/Background';
import { Container } from './styles';

export default function SelectedCourse() {
  return (
    <Background>
      <Container></Container>
    </Background>
  );
}

SelectedCourse.navigationOptions = {
  title: "Curso 01",
  headerTintColor: "#fff",
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#00418C",
    elevation: 0
  }
}
