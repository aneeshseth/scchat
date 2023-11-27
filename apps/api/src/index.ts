import express from "express";
import { WebSocketServer } from "ws";
import http from "http";
const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });
import cors from "cors";
import { RedisSubscriptionManager } from "./redis";
app.use(cors());

const users: {
  [key: string]: {
    room: string;
    ws: any;
  };
} = {};

let counter = 0;

wss.on("connection", async (ws, req) => {
  const wsId = counter++;
  ws.on("message", (message: string) => {
    const data = JSON.parse(message.toString());
    if (data.type === "join") {
      console.log("joinneddddd");
      users[wsId] = {
        room: data.payload.roomId,
        ws,
      };
      RedisSubscriptionManager.getInstance().subscribe(
        wsId.toString(),
        data.payload.roomId,
        ws
      );
    }

    if (data.type === "message") {
      const roomId = users[wsId].room;
      const message = data.payload.message;
      RedisSubscriptionManager.getInstance().addChatMessage(roomId, message);
    }
  });
  ws.on("disconnect", () => {
    RedisSubscriptionManager.getInstance().unsubscribe(
      wsId.toString(),
      users[wsId].room
    );
  });
});

server.listen(3005, () => {
  console.log("server running.");
});
