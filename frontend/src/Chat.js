//import './App.css';
import React, { useEffect,useState} from "react";

function Chat({socket, username}) {
   
  const [message, setMessage] = useState('')

  const [chat, setChat] = useState([])
  
  const sendMessage = (e) => {
  
  e.preventDefault();
  
  console.log(message)
  
  socket.emit('message',{username,message})
  
  setMessage('')
  
  };
  
  useEffect(() => {
  
  socket.on('message', data => {
  
  setChat([...chat, data])
  
  })
  
  })
  
  return(
        <div>
            
            <h1>live Chat</h1>
{chat.map((data, index)=>{

    return(

    <h3 key={index}>{data.username}: <span>{data.message}</span></h3>

    )

})}
          
<form onSubmit={sendMessage}>

<input type="text" name="message"

placeholder='Nachricht'

value={message}

onChange={(e)=>{setMessage(e.target.value)}}

required

></input>

<button type='submit'>Sended</button>

</form> 

</div>
    )
}

export default Chat