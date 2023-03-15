import { useEffect } from "react";
import jwt_decode from "jwt-decode";

export default function GoogleSingIn (){

  async function  handleCredentialResponse(response) {
    const googleToken = response.credential
    const {name,email,picture:image} = jwt_decode(googleToken)
    const data = await fetch("http://localhost:8080/api/auth/googleLogin",{
    method:"POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      name,
      email,
      image,
      google:true
    })
    })
    const {token}= await data.json()
    localStorage.setItem("token", JSON.stringify(token))
}
    useEffect(()=>{
      window.onload = function () {
        google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "outline", size: "medium",logo_alignment: "center" }  // customization attributes
        );
        
      }
    },[])


  return(    <div id="buttonDiv"></div> )}