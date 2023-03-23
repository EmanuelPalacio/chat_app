import { createContext, useReducer } from "react";

export const UserContext = createContext()

const initialState = {
  user:{},
  login:false,
  token:""
}
const reducer = (state,action)=>{
  switch (action.type) {
    case "setUser":
      return {
        user:action.value,
      };
    case "setToken":
      return {
        ...state,
        token:action.value
      }
    
      case "setLogin":
        return {
          user:action.value.user,
          token:action.value.token,
          login:true
        }
    
    default:
      return state
  }

}

export default function UserProvider({children}){
  const [state,dispatch]= useReducer(reducer, initialState)
  localStorage.getItem("user") && dispatch({type:"setToken", value: JSON.parse(localStorage.getItem("token"))})

  return(
    <UserContext.Provider value={{login:state.login,user:state.user, dispatch,}} >
      {children}
    </UserContext.Provider>
  )
}