import "./css/login.css"
import { useState } from "react"
import FormLogin from "./components/FormLogin.jsx"
import GoogleSingIn from "./components/GoogleSingIn.jsx"
import Register from "./components/Register.jsx"

export default function Login() {
  const [page,setPage]= useState("login")
  const option = (value)=>{
    setPage(value)
  }
  return (
    <section className="loginPage">
      <div className='login'>
        {page === "login" ? <FormLogin register={option}/> : <Register login={option}/>}
        <GoogleSingIn/>
      </div>
    </section>
  )
}
