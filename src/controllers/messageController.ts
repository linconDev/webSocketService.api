import { WebSocket } from 'ws';
import { parseMessage } from '../utils/messageUtils';
import { wsService } from '../services/webSocketService';

export function handleIncomingMessage(ws: WebSocket, data: any): void {
    console.log(`Received message: ${data}`);
    const message = parseMessage(data);
    if (message && message.text) {
        console.log(`User said: ${message.text}`);
        wsService.broadcast(`User said: ${message.text}`);
    }
}
