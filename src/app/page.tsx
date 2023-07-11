"use client"
import CardTask from "@/components/CardTask";
import { useState } from "react"

interface ITask {
  id: number,
  nameTask: string 
}

export default function Home() {

  const [task, setTask] = useState('')
  const [listTasks, setListTasks] = useState<ITask[]>([])
  // const addTodos = (todo: any)=>{
  //   if(!todo.text || /^\s*$/.test(todo.text)){
  //     return;
  //   }
  // }
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setTask(e.target.value)
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) =>{
    e.preventDefault();
    
    const newTask = {id: Math.random(), nameTask: task}
    setListTasks([...listTasks, newTask])
    
    setTask('')
  };
  
  const deleteTask=(deletar: number)=>{
    setListTasks(listTasks.filter((id)=> id.id !== deletar))
  }

  // const editTask=(id: number, newPost: string)=>{
  //   const task: any = listTasks.find((idTask)=>{return idTask.id === id})
  //   task.nameTask = newPost;
  // }


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
                  className='bg-[#27274d] p-2 outline-none' />
              <button className="rounded bg-[#414165] p-2" disabled={task? false : true} type="submit">Add Todo</button>
            </div>
        </form>
        <div className="h-[50vh] bg-[#302f57] overflow-auto">
          <div className="flex flex-col gap-2 p-6">{listTasks.map((prop, key)=>{
            return (
              // <div key={key}>
              <CardTask
                key={key}
                cardTask={prop.nameTask} 
                onDeleteAction={()=>deleteTask(prop.id)} 
              />
              // </div>
            )
          })}</div>
        </div>
      </div>
    </main>
  )
}
