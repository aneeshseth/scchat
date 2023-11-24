"use client";
import * as React from "react";
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  function enterPage() {
    router.push("/chat/123");
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://images.unsplash.com/photo-1492573637402-25691cd9eac2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] text-white p-4 sm:p-6 lg:p-8">
        <img
          src="https://www.epbusinessjournal.com/wp-content/uploads/2020/11/starbucks-logo-png-transparent.png"
          style={{ width: "70px", height: "70px" }}
        />
        <div style={{ marginBottom: "25px" }}>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mt-4 md:mt-6 lg:mt-10 text-center mb-10"
            style={{
              backgroundImage: "linear-gradient(to right, #f6ea05, #d23939)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              margin: "10px",
            }}
          >
            an open source room chat application.
          </h1>
        </div>
        <div
          className="flex flex-col sm:flex-row items-center justify-center w-full max-w-screen-lg mt-4 mx-auto"
          style={{ gap: "95px" }}
        >
          <div className="box mb-4 sm:mb-0 white-border">
            <div style={{ fontSize: "27px", marginBottom: "10px" }}>
              Turborepo
            </div>
            <div style={{ width: "300px" }}>
              Written in 100% Typescript, NextJS 13, Express JS & Redis which is
              used as the PubSub.
            </div>
          </div>
          <div className="box mb-4 sm:mb-0 white-border">
            <div style={{ fontSize: "27px", marginBottom: "10px" }}>
              System Design
            </div>
            <div style={{ width: "300px" }}>
              Users hit one of the WebSocket servers, and a message is relayed
              and back to the servers subscribed to it.
            </div>
          </div>
        </div>
        <div>
          <Input
            placeholder="Enter RoomId"
            style={{
              backgroundColor: "black",
              color: "white",
              marginTop: "50px",
              border: "none",
            }}
          />
          <Button
            style={{
              marginTop: "20px",
              fontSize: "20px",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
            onClick={enterPage}
          >
            chat with someone.
          </Button>
        </div>
      </div>
    </>
  );
}
