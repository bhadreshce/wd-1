import React,{ useState, useRef } from 'react'

function Useref() {
    const input = useRef(null)
    const inp = useRef(null)
const [text , setText] = useState(null)
  const getData = () =>{
    console.log(input.current.value)
    setText(input.current.value)
    input.current.value = ''
    input.current.focus()
  }  
    return <>
    <center><input type='text'  ref={input} />
     <button onClick={()=>{
        getData()
     }}>Click me</button>
     <h1>{text}</h1>
     </center> 

     <input type="text" ref={inp} />
    </>
}

export default Useref
