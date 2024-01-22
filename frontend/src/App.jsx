import { useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  return (
    <div>
      <h3>Join a chat</h3>
      <input
        type="text"
        placeholder="John..."
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="text"
        placeholder="Room Id"
        onChange={(event) => setRoom(event.target.value)}
      />
      <button onClick={joinRoom}>Join a room</button>
    </div>
  );
};

export default App;
