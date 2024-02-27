import React,{ useState } from 'react'

function Demo(props) {
   
    return <>
      <h1>{props.webname}</h1>
      <h1>{props.myemail}</h1>
      <button onClick={()=>{
        props.incment()
      }}>Increement</button>
    </>
}

export { Demo }
