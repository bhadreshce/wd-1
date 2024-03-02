import React,{ useState ,useRef } from 'react'


function Todo(){
   const [todo, setTodo ] = useState([])
   const [index, setIndex ] = useState(null)
const input = useRef(null)
	const AddData = () => {
    if(index == null){
            setTodo([...todo, input.current.value ])
       input.current.value = ''
    }else{
        let uData =  [...todo]
         uData[index] = input.current.value
          setTodo(uData)
    }
      
      
	}

	const deleteData = (i) => {
       let newTodo = todo.filter((result , index )=>{
             return index != i
      })

       setTodo(newTodo)
  }

  const updateData = (result,i) =>{
    input.current.value = result
    setIndex(i)
  }

   return <>  
   <center>
      <input type='text' ref={input} />
      <button onClick={()=>{
      	 AddData()
      }}>
       { index==null? 'Add': 'Update'}
      </button>
      {todo.map((result,i)=>{
      	return (
          <>
          <h1>{result}</h1>
          <button onClick={()=>{
            deleteData(i)
          }}>Delete</button>
          <button onClick={()=>{
              updateData(result,i)
          }}>Update</button>
          </>
      	)
      })}
   </center>
   </>  
}

export default Todo
