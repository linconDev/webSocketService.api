import { WebSocket } from 'ws';

export function authenticate(ws: WebSocket, request: any, next: (err?: Error) => void): void {
    // Simulando uma verificação de autenticação básica
    if (request.headers.authorization === "Bearer someToken") {
        console.log("Authenticated");
        next();
    } else {
        next(new Error("Unauthorized"));
    }
}
