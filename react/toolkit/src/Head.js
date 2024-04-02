import React from 'react'
import { useSelector } from 'react-redux'
const Head = () => {
    const state = useSelector((result) => {
        console.log(result);
        return result.addedCart
    })
    return (
        <div>
            <h1 style={{ color: 'red' }}>{state}</h1>
        </div>
    )
}

export default Head