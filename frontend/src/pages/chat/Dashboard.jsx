import { useEffect } from "react";
import socket from "../../service/sockect.js";
import {ChatContact, SendMenssage, ViewMenssage} from "./components"
import "./css/dashboard.css"


export default function Dashboard (){

  useEffect(() => {
    // no-op if the socket is already connected
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return(
    <section className="dashboard" >
        <ViewMenssage/>
      <div className="dashboard__contacts">
        <ChatContact name="CHAT GENERAL"/>
      </div>
      <div className="dashboard__send-menssage">
        <SendMenssage/>
      </div>
    </section>
  )
}