import { WebSocket } from 'ws';

class WebSocketService {
    private clients: Set<WebSocket> = new Set();

    addClient(ws: WebSocket): void {
        this.clients.add(ws);
        ws.on('close', () => {
            this.clients.delete(ws);
        });
    }

    broadcast(message: string): void {
        for (let client of this.clients) {
            client.send(message);
        }
    }
}

export const wsService = new WebSocketService();
