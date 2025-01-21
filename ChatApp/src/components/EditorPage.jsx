import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';

import { useNavigate, useParams } from 'react-router-dom';
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
                username:
            })
        }
    })
  return (
    <div>

    </div>
  )
}

export default EditorPage