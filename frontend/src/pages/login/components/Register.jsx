import { useEffect,useState } from "react";

export default function Register ({login}){
  const [inputValue, setInputValue]= useState()
  const handleChangeInput = (input) => {
    const { name, value } = input.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleSubmit = async (elem)=>{
    elem.preventDefault()

    const data = await fetch("http://localhost:8080/api/user",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({...inputValue, rol:"user"}),
    })
    /* console.log(await data.json()) */
    console.log(inputValue)
    console.log( await data.json())
  }
  useEffect(()=>{
    console.log(inputValue)
  },[inputValue])

  return(
    <div className="formContent">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChangeInput} placeholder="nombre" />
        <input type="text" name="email" onChange={handleChangeInput} placeholder="email"/>
        <input type="password" name="password" onChange={handleChangeInput} placeholder="contraseña"/>
        <button>Registrarse</button>
      </form>
      <button onClick={()=>login("login")} >inicie sesión</button>
    </div>
  )
}