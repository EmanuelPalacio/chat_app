import { useState,useContext } from "react";
import {useNavigate} from "react-router-dom"
import { UserContext } from "../../../context/UserProvider.jsx";
import {findUser, login} from "../../../service/fetchApi.js"


export default function FormLogin ({register}){
  const navigate = useNavigate()
  const [inputValue, setInputValue]= useState()
  const {setDataUser, user:userContext} = useContext(UserContext)
  const handleChangeInput = (input) => {
    const { name, value } = input.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleSubmit = async (elem)=>{
    elem.preventDefault()
    
    const {user,token} =  await login(inputValue)
    if (token){
      const data = await findUser(user._id,token)
      setDataUser(data.user)
      localStorage.setItem("token", JSON.stringify(token))
      navigate(`/user/${user._id}`)
    }
    
  }

  return(
    <div className="formContent">
      <h1>Inicio de sesión</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" onChange={handleChangeInput}/>
        <input type="password" name="password" onChange={handleChangeInput}/>
        <button type="submit">Iniciar sesión</button>
      </form>
      <button  onClick={()=> register("register")} >Registrarse</button>
    </div>
  )
}