import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${StatusBar.currentHeight || 30}px;
  padding: 15px 0;
`;

export const Title = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const Icon = styled(Feather)`
  color: #fff;
  font-size: 20px;
  margin-right: 10px;
`;

export const RightIcons = styled.View`
  flex-direction: row;
`;
