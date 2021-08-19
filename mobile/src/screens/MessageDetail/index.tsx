import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { api } from '../../services/api';

import { RootStackParamList } from '../../routes/app.routes';
import Header from '../../components/Header';

import { Container } from './styles';

type IMessageDetailStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MessageDetail'
>;

const MessageDetail: React.FC<IMessageDetailStackScreenProps> = ({ route }) => {
  const { messageId } = route.params;

  useEffect(() => {
    const markAsRead = async () => {
      await api.patch(`/messages/${messageId}/mark-as-read`);
    };

    markAsRead();
  }, [messageId]);

  return (
    <Container>
      <Header />
      <Text>Welcome to MessageDetail from MessageId: {messageId}</Text>
    </Container>
  );
};

export default MessageDetail;
