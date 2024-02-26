import React,{ useState } from 'react'

function Test() {
    const [count , setCount] = useState(0)

    const increeement = () => {
       setCount(count+1)
    }

    const decreement = () => {
      setCount(count-1)
    }
    return <>
    <center><h1>{count}</h1></center>
    <button onClick={()=>{
        increeement()
    }}>Increement</button>
    <button onClick={()=>{
        decreement()
    }}>Decreement</button>
    </>
}

export default Test
