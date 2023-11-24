import express from "express";
import { WebSocketServer } from "ws";
import http from "http";
const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });
