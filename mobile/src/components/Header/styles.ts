import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  margin-top: ${StatusBar.currentHeight || 30}px;
  padding: 15px 0;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
