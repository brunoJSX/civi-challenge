import { Router } from 'express';

const routes = Router();

interface IMessage {
  id: number;
  timestamp: number;
  subject: string;
  detail: string;
  readed: boolean;
}

const messages: IMessage[] = [
  {
    id: 1,
    timestamp: 1629337679262,
    subject: 'Vaga aberta 01',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 2,
    timestamp: 1629337686262,
    subject: 'Vaga aberta 02',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 3,
    timestamp: 1629337701380,
    subject: 'Vaga aberta 03',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 4,
    timestamp: 1629337709006,
    subject: 'Vaga aberta 04',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
];

routes.get('/messages', (request, response) => {
  const messagesOrdered = messages.sort((a, b) =>
    a.timestamp > b.timestamp ? 1 : -1,
  );

  return response.json(messagesOrdered);
});

routes.patch('/messages/:id/mark-as-read', (request, response) => {
  const { id } = request.params;

  const messageIndex = messages.findIndex(msg => msg.id === Number(id));

  if (messageIndex === -1) {
    return response.status(400).json({
      status: 'error',
      message: 'Message not found',
    });
  }

  const message = messages[messageIndex];

  message.readed = true;

  messages[messageIndex] = message;

  return response.json(message);
});

export default routes;
