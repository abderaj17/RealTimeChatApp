import React, { useState } from 'react'
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';


const Home = () => {
    const [roomId, setRoomId] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const generateRoomId = e =>{
        e.prevenDefault();
        const Id = uuid();
        setRoomId(Id);
        toast("Room ID is generated");
    }
    const joinRoom = e =>{
     console.log("I've joined room.")
    }
    const handleInputEnter = e =>{
      if(e.code === "Enter"){
        joinRoom();
      }

    }
  return (
    <div style={{width:"100%", height:"100vh", display: "flex" , justifyContent: "center", alignItems: "center"}}>
      <div style={{minWidth:"600px", maxWidth: "800px", height: "400px", backgroundColor: "white", borderRadius: "16px",}}>
        <div align="center">
          <img src="https://acciojob.com/src/Navbar/logo.svg" alt='nav' />
        </div>
        <input type='text' value={username} onChange={e => setRoomId(e.target.value)} placeholder='USERNAME' onKeyUp={handleInputEnter} />
        <button onClick={joinRoom}>JOIN</button>
        <p style={{color: 'black'}}>Don't have a room ID? Create  
        <span style={{color: "#EFB036", cursor: "pointer"}}> New Room</span>
        </p>
      </div>
    </div>
  )
}

export default Home