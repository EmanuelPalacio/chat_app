
export default function ChatContact ({name,id}){

  return(
    <button className="contact contact--select" >
      <p className="contact__name">{name}</p>
      {id && <p className="contact__id"></p>}
    </button>
  )
}