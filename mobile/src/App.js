import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import createRoutes from '~/routes';
import Background from '~/components/Background';
// import { Container } from './styles';

export default function App() {
  // const signed = useSelector(state => state.auth.signed)
  const signed = false;
  const Routes = createRoutes(signed);
  return (
    <Background>
      <Routes />
    </Background>
  );
}
