
import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'

const ToDo = () => {
    const [data, setData] = useState([])
    const inpt = useRef(null)
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('http://localhost:8001/std').then((result) => {
            console.log(result.data);
            setData(result.data)
        })
    }

    const addData = () => {
        axios.post('http://localhost:8001/std', { name: inpt.current.value }).then(() => {
            getData()
        })


    }


    // setData([...data, inpt.current.value])

    return (
        <>
            <center>
                <input type="text" ref={inpt} />
                <button onClick={() => {
                    addData()
                }}>Add</button>
                <table border={1} rules='all'>
                    <tr>

                        <th>Name</th>
                    </tr>
                    {data.map((result) => {
                        return (
                            <>
                                <tr>
                                    <td>{result.name}</td>
                                </tr>
                            </>
                        )
                    })}
                </table>
            </center>

        </>
    )
}

export default ToDo