import { useContext, useState } from "react"
import { UserContext } from "../../../context/UserProvider.jsx"
import socket from "../../../service/sockect.js"


export default function SendMenssage (){

  const {user} = useContext(UserContext)
  const [msg,setMsg] = useState("")
  const handleMenssage = (event)=>{
    setMsg(event.target.value)
  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    
    const data = {
      msg,
      id: user._id
    }
    socket.emit("menssage",data)
  }
  return(
    <form onSubmit={handleSubmit} >
      <input type="text" name="sendMenssage" onChange={handleMenssage} />
      <button>enviar</button>
    </form>
  )
}