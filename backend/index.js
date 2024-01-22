const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const port = 3001;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log(`User ${socket.id} has connected`);

  io.on("disconnect", () => {
    consoe.log(`User ${socket.id} has disconnected`);
  });
});

app.use(cors());

server.listen(port, () => {
  console.log(`Server Running on port: ${port} `);
});
