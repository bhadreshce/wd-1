
import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'

const ToDo = () => {
    const [data, setData] = useState([])
    const [index, setIndex] = useState(null)


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
        if (index == null) {
            axios.post('http://localhost:8001/std', { name: inpt.current.value }).then(() => {
                getData()
                inpt.current.value = null
            })
        } else {

            axios.patch(`http://localhost:8001/std/${index}`, { name: inpt.current.value }).then((res) => {
                getData()
                inpt.current.value = null
                setIndex(null)
            })

        }

    }

    const deleteData = (i) => {
        axios.delete(`http://localhost:8001/std/${i}`).then(() => {
            getData()
        })
    }

    const updateData = (id, name) => {
        setIndex(id)
        inpt.current.value = name
    }


    // setData([...data, inpt.current.value])

    return (
        <>
            <center>
                <input type="text" ref={inpt} />
                <button onClick={() => {
                    addData()
                }}>{index == null ? 'Add' : 'Update'}</button>
                <table border={1} rules='all'>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    {data.map((result, i) => {
                        return (
                            <>
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{result.name} </td>
                                    <td><button onClick={() => {
                                        deleteData(result.id)
                                    }}>Delete</button>
                                        <button onClick={() => {
                                            updateData(result.id, result.name)
                                        }}>Update</button>
                                    </td>
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