"use client";
import React, { useState, useEffect } from "react";
import "./page.css";
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import { useRef } from "react";

function Page() {
  const [chats, setChats] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [webSocket, setWebSocket] = useState(null);
  const chatListRef = useRef(null);

  useEffect(() => {
    const initializeWebSocket = () => {
      const newWebSocket = new WebSocket("ws://localhost:3005");
      setWebSocket(newWebSocket);

      newWebSocket.onmessage = function (event) {
        console.log(event.data.payload.message);
        const data = JSON.parse(event.data);
        if (data.type === "message") {
          setChats((prevMessages) => [...prevMessages, data.payload.message]);
        }
      };

      newWebSocket.onopen = () => {
        //const { roomId } = useSearchParams().id;
        //console.log(roomId);
        newWebSocket.send(
          JSON.stringify({
            type: "join",
            payload: {
              roomId: "123",
            },
          })
        );
      };
    };

    initializeWebSocket();
    scrollToBottom();

    return () => {
      if (webSocket) {
        webSocket.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (webSocket) {
      webSocket.send(
        JSON.stringify({
          type: "message",
          payload: {
            message: newMessage,
          },
        })
      );
      setNewMessage("");
    }
  };

  const scrollToBottom = () => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  };

  return (
    <div className="container2 bg-[url('https://images.unsplash.com/photo-1569470451072-68314f596aec?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div
        style={{
          overflowY: "auto",
          maxHeight: "calc(100vh - 150px)",
          padding: "30px",
        }}
        ref={chatListRef}
      >
        {chats.map((chat, index) => (
          <div
            key={index}
            className={chat.sender === "me" ? "chat-me" : "chat-him"}
            style={{
              color: chat.sender === "me" ? "blue" : "green",
              fontSize: "25px",
            }}
          >
            <h2>
              <Button
                variant={chat.sender === "me" ? "destructive" : "default"}
                style={{ padding: "25px 25px", fontSize: "17px" }}
              >
                {chat}
              </Button>
            </h2>
          </div>
        ))}
      </div>
      <div className="footer-box">
        <Input
          placeholder="enter message.."
          style={{
            backgroundColor: "black",
            color: "white",
            height: "50px",
            fontSize: "20px",
          }}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button
          className="footer-button"
          variant="destructive"
          onClick={sendMessage}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default Page;
