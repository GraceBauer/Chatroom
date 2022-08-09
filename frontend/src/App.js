import './App.css';
import React, { useState } from "react";
import Chat from './Chat';
import io from 'socket.io-client'

const socket = io('http://localhost:5000');

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () =>{
    if (username!==""&& room !==""){
      socket.emit("join_room", room);
      setShowChat(true);
    }
  }

 return (
 <div className="container"> 
 {!showChat ? (
  <div >
 <h2>Chat App</h2>

 <input type="text" placeholder="Benutzername ..." 
  onChange={(event) => {
   setUsername(event.target.value);
   }}
   />
 <input type="text" placeholder="Chatraum ID..." onChange={(event) => {
   setRoom(event.target.value);
   }} />
 <button onClick={joinRoom}>Raum betreten</button>
 </div>
  )
  : (
 <Chat socket={socket} username={username} room={room}/>
  )}


 </div>
  );
}


export default App;
