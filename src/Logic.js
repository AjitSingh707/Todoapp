import React from 'react'

const Logic = ({flag,task,nam}) => {
    
  return (
    <div className='logic'>
      { flag ?<h1>Your {nam} Are</h1>:<h1>Your have no {nam}</h1>}
      <ol className='task'>
        {
          task.map((item,id)=>{
            return <li key={id}>{item}</li>
          })
        }
      </ol>
    </div>
  )
}

export default Logic
