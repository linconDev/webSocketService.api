import WebSocket from 'ws';
import { WS_PORT } from './config/serverConfig';
import { authenticate } from './middlewares/authenticationMiddleware';
import { handleIncomingMessage } from './controllers/messageController';
import { wsService } from './services/webSocketService';

const wss = new WebSocket.Server({ port: WS_PORT });

wss.on('connection', (ws, request) => {
    authenticate(ws, request, (err) => {
        if (err) {
            ws.close();
            return;
        }

        wsService.addClient(ws);

        ws.on('message', (data) => {
            handleIncomingMessage(ws, data);
        });
    });
});

console.log(`WebSocket server running on ws://localhost:${WS_PORT}`);
