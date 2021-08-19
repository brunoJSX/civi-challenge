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
  {
    id: 5,
    timestamp: 1629337679262,
    subject: 'Vaga aberta 05',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 6,
    timestamp: 1629337686262,
    subject: 'Vaga aberta 06',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 7,
    timestamp: 1629337701380,
    subject: 'Vaga aberta 07',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 8,
    timestamp: 1629337709006,
    subject: 'Vaga aberta 08',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 9,
    timestamp: 1629337679262,
    subject: 'Vaga aberta 09',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 10,
    timestamp: 1629337686262,
    subject: 'Vaga aberta 10',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 11,
    timestamp: 1629337701380,
    subject: 'Vaga aberta 11',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 12,
    timestamp: 1629337709006,
    subject: 'Vaga aberta 12',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 13,
    timestamp: 1629337679262,
    subject: 'Vaga aberta 13',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 14,
    timestamp: 1629337686262,
    subject: 'Vaga aberta 14',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 15,
    timestamp: 1629337701380,
    subject: 'Vaga aberta 15',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 16,
    timestamp: 1629337709006,
    subject: 'Vaga aberta 16',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 17,
    timestamp: 1629337679262,
    subject: 'Vaga aberta 17',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 18,
    timestamp: 1629337686262,
    subject: 'Vaga aberta 18',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 19,
    timestamp: 1629337701380,
    subject: 'Vaga aberta 19',
    detail: 'Esta vaga esta aberta até um certo tempo por favor aproveite',
    readed: false,
  },
  {
    id: 20,
    timestamp: 1629337709006,
    subject: 'Vaga aberta 20',
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
