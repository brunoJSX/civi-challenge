import { Router } from 'express';

import messages from '../messages.data';

const routes = Router();

routes.get('/messages', (request, response) => {
  const messagesOrdered = messages.sort((a, b) => a.timestamp - b.timestamp);

  return response.json(messagesOrdered.reverse());
});

routes.get('/messages/:id', (request, response) => {
  const { id } = request.params;

  const message = messages.find(msg => msg.id === Number(id));

  if (!message) {
    return response.status(400).json({
      status: 'error',
      message: 'Message not found',
    });
  }

  return response.json(message);
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
