import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
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

  // hack to force re-render
  const [forceRender, setForceRender] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await api.get('messages');

      setMessages(data);
    };

    fetchMessages();
  }, [forceRender, isFocused]);

  return (
    <Container>
      <Header
        title="Inbox"
        rightIcons={[
          { name: 'refresh-ccw', onPress: () => setForceRender(!forceRender) },
        ]}
      />

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
