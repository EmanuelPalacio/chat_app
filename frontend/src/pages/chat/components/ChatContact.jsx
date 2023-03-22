
export default function ChatContact ({name,id}){
  const handleContact = ()=>{
    
  }

  return(
    <button className="contact contact--select" onClick={handleContact} >
      <p className="contact__name">{name}</p>
      {id && <p className="contact__id"></p>}
    </button>
  )
}