import React, { useEffect, useState } from 'react'

const Api = () => {
    const [count, setCount] = useState(0)
    const [count2, setCountt] = useState(0)
    useEffect(() => {
        console.log('hello');
        if (count > 4) {
            document.body.style.backgroundColor = 'red'

        }
    }, [count])
    useEffect(() => {
        console.log('hello');
        if (count2 > 4) {
            document.body.style.backgroundColor = 'yellow'

        }
    }, [count2])
    return (

        <>
            <button onClick={() => {
                setCount(count + 1)
            }}>Inreement</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>Decreement</button>
            <h1>{count}</h1>

            <button onClick={() => {
                setCountt(count2 + 1)
            }}>iNC</button>
            <h1>{count2}</h1>
        </>
    )
}

export default Api