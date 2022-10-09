import React,{useState} from 'react'
import "./index.css"
import Logic from './Logic'
let flag1 = false
let flag2 = false
let flag3 = false
const App = () => {
  // All used state---------------------
  const[inp,setInp] = useState('')
  const [pendingtask,setPendingtask] = useState([])
  const[task,setTask] = useState([])
  const [completed,setCompleted] = useState([])
// event to take input ---------------
  const setTaskevent = (e)=>{
    setInp(e.target.value)
  }
// event to add task and show in our page
  const addEvent = ()=>{
    if(inp === ''){
      alert("enter your task")
    }
    else{
      setPendingtask((p)=>{
        return [...p,inp]
      })
      setInp('')
      flag1 = true
      flag3 = true
      setTask((t)=>{
        return [...t,inp]
      })
    }
    
  }
// event to delete task and show in page
  const delTask = (id)=>{
    setPendingtask((oldtask)=>{
      return oldtask.filter((element,index)=>{
        return index !== id
      })
    })

    setCompleted((oldtask)=>{
      return [...oldtask,pendingtask[id]]
    })
    
    if (pendingtask.length-1 === 0){
      flag1 = false
    }
    flag2 = true
  }

// main component which is rendring in browser----------
  return (
    <>
    <div className='cen'>
    <div className='main'>
      <h1 className='todo'> Todo App</h1>
      <div className='inp'>
      <label>Enter your task: </label>
      <input type = "text" placeholder="enter task"
       value={inp} onChange = {setTaskevent}/>
       <button onClick={addEvent}> Add Task</button>
       </div>
       <Logic flag={flag3} task={task} nam ={'task'} />
       
       {flag1?<h1>Your pending Task Are</h1>:<h1>Your have no pending task</h1>}
      <ol className='task'>
        {
          pendingtask.map((item,id)=>{
            return <li key={id}>{item} <button onClick={()=>{delTask(id)}}>Delete</button></li>
          })
        }
      </ol>

      <Logic flag={flag2} task={completed} nam ={'completed task'} />
      </div>
    </div>
    </>
  )
}

export default App
