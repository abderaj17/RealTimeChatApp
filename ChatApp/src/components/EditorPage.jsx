import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



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
            
        }
    })
  return (
    <div>

    </div>
  )
}

export default EditorPage