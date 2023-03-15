import socket from "../../service/sockect.js"
import {ChatContact, SendMenssage, ViewMenssage} from "./components"
import "./css/dashboard.css"


export default function Dashboard (){

  return(
    <section className="dashboard" >
      <div className="dashboard__view-chat">
        <ViewMenssage/>
      </div>
      <div className="dashboard__contacts">
        <ChatContact/>
      </div>
      <div className="dashboard__send-menssage">
        <SendMenssage/>
      </div>
    </section>
  )
}