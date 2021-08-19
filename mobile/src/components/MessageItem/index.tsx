import React from 'react';
import { format } from 'date-fns';

import { Container, Subject, DateTime } from './styles';

export type IMessage = {
  id: number;
  timestamp: number;
  subject: string;
  readed: boolean;
};

type IMessageItemProps = {
  data: IMessage;
  onPress(): void;
};

const MessageItem: React.FC<IMessageItemProps> = ({ data, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Subject readed={data.readed}>{data.subject}</Subject>

      <DateTime readed={data.readed}>
        {format(data.timestamp, "MMM dd',' yyyy',' p")}
      </DateTime>
    </Container>
  );
};

export default MessageItem;
