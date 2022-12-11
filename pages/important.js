
import React, { useState } from 'react'

function Comments() {
    const [seter1,setComments]=useState([])
    const [submitc,updatedsubmit]=useState('')
    const fetchCommets=async()=>{
        const  responce= await fetch('api/Comments');
        const data= await responce.json()
        setComments(data)
    }
    const SubmitCommets= async()=> {
        const  responce= await fetch('api/Comments',{
        method:'POST',
        body:JSON.stringify({ submitc }),
        headers:{
            'Content-Type':'application/json',
        },
    })

        const data= await responce.json()
        setComments(data)
    }

  return (
    <>
    <input
    type='text'
    value={submitc}
    onchange={(e)=> updatedsubmit(e.target.value)}
    />
    <button onClick={SubmitCommets}>submit comment</button>
    <button onClick={fetchCommets}>load comments</button>
    {seter1.map((dataf)=>{
        return(
            <div key={(seter1.id)}>
                {dataf.id} {dataf.text}
            </div>
        )
    })}
    </>

  )
}

export default Comments