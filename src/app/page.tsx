"use client"
import CardTask from "@/components/CardTask";
import { useState } from "react"

interface Task {
  id: number,
  textTask: string 
}

export default function Home() {

  const [task, setTask] = useState('')
  const [listTasks, setListTasks] = useState<Task[]>([])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setTask(e.target.value)
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) =>{
    e.preventDefault();
    
    const newTask = {id: Math.random(), textTask: task}
    setListTasks([...listTasks, newTask])
    
    setTask('')
  };
  
  const deleteTask=(deletar: number)=>{
    setListTasks(listTasks.filter((id)=> id.id !== deletar))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#79b7e0] text-white">
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8 bg-[#302f57] rounded-t-lg p-6">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
          <label>What's the plan for day</label>
            <div className="bg-[#27274d]">
              <input
                  placeholder="Add Task"
                  type="text"
                  value={task}
                  name="text"
                  onChange={handleChange}
                  className="bg-[#27274d] p-2 outline-none" />
              <button className={`rounded bg-[#414165] p-2  cursor-pointer ${task?'hover:bg-[#5f5f94]':'cursor-not-allowed'}`} disabled={task? false : true} type="submit">Add Todo</button>
            </div>
        </form>
        <div className="h-[50vh] bg-[#302f57] overflow-auto rounded-b-lg">
          <div className="flex flex-col gap-2 p-6">{listTasks.map((task)=>{
            return (
                <CardTask
                  key={task.id}
                  textTask={task.textTask} 
                  onDeleteAction={()=>deleteTask(task.id)} 
                />
            )
          })}</div>
        </div>
      </div>
    </main>
  )
}
