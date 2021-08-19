import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inbox from '../screens/Inbox';
import MessageDetail from '../screens/MessageDetail';

export type RootStackParamList = {
  Inbox: undefined;
  MessageDetail: { messageId: number };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Inbox" component={Inbox} />
      <Screen name="MessageDetail" component={MessageDetail} />
    </Navigator>
  );
};

export default AppRoutes;
