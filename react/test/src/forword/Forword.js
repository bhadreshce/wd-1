import React, { useRef } from 'react'
import Iner from './Iner'

const Forword = () => {
    const input = useRef(null)
    const printData = () => {
        input.current.focus()
        input.current.value = 2000
    }
    return (
        <>
            <button onClick={() => {
                printData()
            }} >Click </button>
            <Iner ref={input} />
        </>
    )
}

export default Forword