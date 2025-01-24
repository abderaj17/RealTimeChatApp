import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';

import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ACTIONS } from './Actions';



const LANGUAGES = [
    "python",
    "java",
    "cpp",
    "nodejs",
    "c",
    "ruby",
    "go",
    "scale",
    "bash",
    "sql",
    "pascal",
    "csharp",
    "php",
    "swift",
    "rust",
    "r",
]

const EditorPage = () => {
    const [clients, setClients] = useState([]);
    const [output, setOutput] = useState("");
    const [isCompiledWindowOpen, setIsCompiledWindowOpen] = useState(false);
    const [isCompiled, setIsCompiled] = useState(false);
    const [selectedLanguages, setSelectedLanguages] = useState("python3");

    const codeRef = useRef();

    const Location = useLocation();
    const navigate = useNavigate()
    const  {roomId} =  useParams();

    const socketRef = useRef();

    useEffect(()=> {
        const init = async ()=>{
            socketRef.current = await initSocket();
            socketRef.current.on('connect_error', err => handleErrors(err))
            socketRef.current.on('connect_failed', err => handleErrors(err))

            console.log('inside useeffect');

            const handleErrors = err =>{
                console.log('Error', err);
                toast.error('Socket connection failed, try again later')
                navigate('/');
            }
            socketRef.current.emit(ACTIONS.JOIN,{
                roomId,
                username: Location.state?.username
            })
            socketRef.current.on(
                ACTIONS.JOINED,
                ({clients, username, socketId})=>{
                    if(username !== Location.state?.username){
                        toast.success(`${usename} joined the room`)
                    }
                    setClients(clients);
                    socketRef.current.emit(ACTIONS.SYNC_CODE, {
                        code: codeRef.current,
                        socketId
                    })
                }
            )
            socketRef.current.on(ACTIONS.DISCONNECTED,
                ({socketId, username})=>{
                    toast.success(`${username} left the room`)
                    setClients((prev)=>{
                        return prev.filter(client=> client.socketId != socketId)
                    })
                }
            )
        }
        init();

        return ()=>{
            socketRef.current && socketRef.current.disconnected();

        }
    },[])

    if(!Location.state){
        return <Navigate to="/" />
    }

    const copyRoomId = async() => {
        try{
            await navigate.clipboard.writeText(roomId);
            toast.success("Room ID is copied");
        } catch(error){
            console.log(error);
            toast.error("Unable to copy the room ID")
        }
    }

    const leaveRoom = async()=>{
        navigate('/')
    }

    const runCode = async() =>{

    }

    const toggleCompileWindow = ()=>{
        setIsCompiledWindowOpen(!isCompiledWindowOpen);
    }
  return (
    <div>
         khh
    </div>
  )
}

export default EditorPage