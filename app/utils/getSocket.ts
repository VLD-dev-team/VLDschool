"use client";

import { io, Socket } from "socket.io-client"

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    console.log("connection to socket");
    
    socket = io();

    socket.on("connection", (data: any) => {
      console.log("Socket connecté.");
    })
  }
  return socket;
};
