export default function SendMenssage (){
  const handleSubmit = ()=>{
    
  }
  return(
    <form onSubmit={handleSubmit} >
      <input type="text" name="sendMenssage" />
      <button>enviar</button>
    </form>
  )
}