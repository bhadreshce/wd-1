import React, { useRef, useState } from 'react'

const Todo = () => {
    const input = useRef(null)
    const [todo, setTodo] = useState([])
    const [id, setid] = useState(null)
    const addData = () => {
        // let todo = [...todo]

        if (id == null) {
            setTodo([...todo, input.current.value])
            input.current.value = null
            console.log(todo);
        } else {
            let newtodo = [...todo]
            newtodo[id] = input.current.value
            setTodo(newtodo)
            input.current.value = null
            setid(null)
        }


    }

    const deleteData = (i) => {
        let newtodo = [...todo]
        newtodo.splice(i, 1)
        setTodo(newtodo)
    }

    const updateData = (res, index) => {
        input.current.value = res
        setid(index)
    }

    return (
        <>
            <input type="text" ref={input} />
            <button onClick={() => {
                addData()
            }}>{id == null ? 'Add' : 'Update'}</button>
            {todo.map((result, index) => {
                return (
                    <>
                        <h1>{result}</h1>
                        <button onClick={() => {
                            deleteData(index)
                        }}>delete</button>

                        <button onClick={() => {
                            updateData(result, index)
                        }}>Update</button>
                    </>
                )
            })}
        </>
    )
}

export default Todo