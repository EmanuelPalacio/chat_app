import { createContext, useState } from "react";

export const UserContext = createContext()

export default function UserProvider({children}){
  
  const [user,setUser] = useState({})

  const setDataUser = (user) =>{
    setUser(user)
  }
  const clearDataUser = () =>{
    setDataUser({})
  }

  return(
    <UserContext.Provider value={{user, setDataUser,clearDataUser}} >
      {children}
    </UserContext.Provider>
  )
}