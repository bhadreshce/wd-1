import React, { useState, useCallback } from 'react'
import B from './B'

const A = () => {
    const [count, setCount] = useState(0)
    const [todo, setTodo] = useState([])
    const changeB = useCallback(() => {
        console.log('i am from a');
    }, [])
    return (
        <>A
            <button onClick={() => {
                setCount(count + 1)
            }}>increement</button>
            <h1>{count}</h1>
            <B todolist={todo} fun={changeB} />
        </>
    )
}

export default A