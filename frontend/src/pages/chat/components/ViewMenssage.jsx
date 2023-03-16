import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/UserProvider.jsx"
import socket from "../../../service/sockect.js"

export default function ViewMenssage (){
  const [msg, setMsg] = useState([])
  const {user} = useContext(UserContext)

  useEffect(()=>{
    socket.on("viewMenssage", (menssages)=>{
      setMsg(menssages)
    })
  },[msg])

  return(
    <div className="dashboard__view-chat">
      {msg.map((menssage, index) =>{
        const messageSender = menssage.user === user._id ? "mennsage mennsage--send" : "mennsage"
        return (<p className={messageSender} key={index} >{menssage.msg}s</p>)
      })}
    </div>
  )
}