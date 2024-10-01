"use server";

import { Server } from "socket.io";

let io: Server;

export async function GET(req: Request) {
    if (!io) {

        // Création de l'instance Socket.io
        io = new Server(3001, {
            cors: {
                origin: "*",
            },
        });

        io.on("connection", (socket) => {
            console.log("new connection:", socket.id);

            socket.on("message", (msg) => {
                console.log("Message received:", msg);
                io.emit("message", msg); // Broadcast message to all connected clients
            });

            socket.on("disconnect", () => {
                console.log("new disconnection:", socket.id);
            });
        });
    }

    return new Response('Socket initialisé', {
        status: 200
    });
}
