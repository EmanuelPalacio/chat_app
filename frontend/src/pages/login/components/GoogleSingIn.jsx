import jwt_decode from "jwt-decode";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserProvider.jsx";
import { findUser, googleLogin } from "../../../service/fetchApi.js";

export default function GoogleSingIn (){
  const {setDataUser} = useContext(UserContext)
  const navigate = useNavigate()
  async function  handleCredentialResponse(response) {
    const googleToken = response.credential

    const {name,email,picture:image} = jwt_decode(googleToken)
    const data = await googleLogin({
      name,
      email,
      image,
      google:true
    })
    const {token, user}= await data
    if (token){
      const data = await findUser(user._id,token)
      setDataUser(data.user)
      localStorage.setItem("token", JSON.stringify(token))
      navigate(`/user/${user._id}`)
    }
}
  useEffect(()=>{
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large",logo_alignment: "center" }  // customization attributes
      );
      
    }
    return ()=>{
      google.accounts.id.disableAutoSelect()
    }
  },[])


  return(    <div id="buttonDiv"></div> )
}