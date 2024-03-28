import React, { useMemo, useState } from 'react'

const Memo = () => {


    const [count, setCount] = useState(0)
    const callFunction = useMemo(() => {
        console.log('i am called');
        return 'hello'
    }, [])
    return (
        <>
            {callFunction}
            <button onClick={() => {
                setCount(count + 1)
            }}>Increement</button>
            <h1>{count}</h1>
        </>
    )
}

export default Memo


myFUnction([1, 2, 2, 3])

output: { 1:1,2:2,3:1 }