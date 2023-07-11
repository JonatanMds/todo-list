

interface Card{
  cardTask: string
  onDeleteAction: () => void
}

export default function CardTask({cardTask, onDeleteAction}:Card){
  return(
    <div className="flex gap-2 justify-between items-center bg-[#414165] p-4 rounded">
      <h1>{cardTask}</h1>
      <button className="p-4 bg-[#27274d] rounded" onClick={onDeleteAction}>X</button>
    </div>
  )
}