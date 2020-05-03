import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import createRoutes from '~/routes';
// import { Container } from './styles';

export default function App() {
  // const signed = useSelector(state => state.auth.signed)
  const signed = false;
  const Routes = createRoutes(signed);
  return (
    <Routes />
  );
}
