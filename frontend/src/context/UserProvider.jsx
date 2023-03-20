import { createContext, useState } from "react";

export const UserContext = createContext()

export default function UserProvider({children}){
  
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")))

  const setDataUser = (user) =>{
    setUser(user)
    localStorage.setItem("user",JSON.stringify(user))
  }
  const clearDataUser = () =>{
    setDataUser(null)
  }

  return(
    <UserContext.Provider value={{user, setDataUser,clearDataUser}} >
      {children}
    </UserContext.Provider>
  )
}