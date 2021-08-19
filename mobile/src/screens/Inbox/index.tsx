import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { api } from '../../services/api';

import { RootStackParamList } from '../../routes/app.routes';
import MessageItem, { IMessage } from '../../components/MessageItem';
import Header from '../../components/Header';

import { Container } from './styles';

type IInboxScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Inbox'
>;

type IInboxProps = {
  navigation: IInboxScreenNavigationProp;
};

const Inbox: React.FC<IInboxProps> = ({ navigation }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await api.get('messages');

      setMessages(data);
    };

    fetchMessages();
  }, []);

  return (
    <Container>
      <Header title="Inbox" />

      <FlatList
        data={messages}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <MessageItem
            data={item}
            onPress={() =>
              navigation.navigate('MessageDetail', { messageId: item.id })
            }
          />
        )}
      />
    </Container>
  );
};

export default Inbox;
