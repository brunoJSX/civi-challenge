import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { format } from 'date-fns';

import { api } from '../../services/api';

import { RootStackParamList } from '../../routes/app.routes';
import Header from '../../components/Header';
import { IMessage } from '../../components/MessageItem';

import {
  Container,
  Content,
  ContentDescription,
  ContentTitle,
  DateTime,
} from './styles';

type IMessageDetailStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MessageDetail'
>;

const MessageDetail: React.FC<IMessageDetailStackScreenProps> = ({
  route,
  navigation,
}) => {
  const { messageId } = route.params;
  const [message, setMessage] = useState<IMessage>();

  useEffect(() => {
    const fetch = async () => {
      await api.patch(`/messages/${messageId}/mark-as-read`);
      const { data } = await api.get(`/messages/${messageId}`);

      setMessage(data);
    };

    fetch();
  }, [messageId]);

  return (
    <Container>
      <Header
        leftIcon={{ name: 'arrow-left', onPress: () => navigation.goBack() }}
        rightIcons={[{ name: 'trash', onPress: () => navigation.goBack() }]}
      />

      {message && (
        <Content>
          <ContentTitle>{message.subject}</ContentTitle>
          <DateTime>
            {format(message.timestamp, "MMM dd',' yyyy',' p")}
          </DateTime>

          <ContentDescription>{message.detail}</ContentDescription>
        </Content>
      )}
    </Container>
  );
};

export default MessageDetail;
