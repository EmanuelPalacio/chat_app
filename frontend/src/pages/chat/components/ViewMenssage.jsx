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
        const messageSender = menssage.user._id === user._id ? "menssage menssage--send" : "menssage"
        return (
        <div className={messageSender} key={index} >
            {menssage.user._id !== user._id && <p className="menssage__name">{menssage.user.name}</p>}
            <p>{menssage.msg}</p>
        </div>
        )

      })}
    </div>
  )
}