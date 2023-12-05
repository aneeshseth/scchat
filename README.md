# A scalable text-communication platform


<img width="1238" alt="image" src="https://github.com/aneeshseth/scchat/assets/122401851/e433ad1f-f626-423c-b894-c295a61da882">


## System Design of a Scalable Real-Time Text-Communication Platform?

<img width="1238" alt="image" src="https://github.com/aneeshseth/scchat/assets/122401851/72f11bba-24a0-4760-bbe2-c901741de7a8">

A Client (NextJS 13) hits a load balancer to send a message, the request being sent to any one of the WebSocket servers, which then communicate with a Redis (Pub-Sub) Instance which keeps track of everybody subscribed to a certain room, and the people who leave the room. This central subscription based architecture allows us to recieve information of everybody in a certain room regardless of which WebSocket server they hit.

This also allows each component (The servers which could be deployed to AWS/any other cloud provider) and Redis to scale independently.


## Tech Stack?

- Typescript
- Turborepo
- NextJS 13
- ExpressJS
- Redis

