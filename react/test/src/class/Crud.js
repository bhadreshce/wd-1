import React, { useState, useEffect, useRef } from 'react';

function Crud() {
    const [input, setInput] = useState({ name: '', email: '', phone: '' });
    const [id, setId] = useState(null)
    const [data, setData] = useState([])
    const name = useRef('')
    const email = useRef('')
    const phone = useRef('')
    useEffect(() => {
        console.log(input);
    }, [input])

    useEffect(() => {
        console.log(data);
    }, [data])
    const handlleChange = (e) => {

        setInput({ ...input, [e.target.name]: e.target.value });
        //  console.log(input);


    };

    const handlleSubmit = (e) => {
        e.preventDefault();

        if (id == null) {
            setData([...data, input])
        } else {
            let upData = [...data]
            upData[id].name = name.current.value
            upData[id].email = email.current.value
            upData[id].phone = phone.current.value
            setData(upData)

        }

        setInput({ name: '', email: '', phone: '' })
        name.current.value = ''
        email.current.value = ''
        phone.current.value = ''
        setId(null)
    }

    const deleteData = (i) => {
        let newData = [...data]
        newData.splice(i, 1)
        setData(newData)
    }

    const updateData = (res, index) => {
        setId(index)
        name.current.value = res.name
        email.current.value = res.email
        phone.current.value = res.phone
    }
    return (
        <>
            <form onSubmit={handlleSubmit}>
                <label>Name</label>
                <input type="text" ref={name} onKeyUp={handlleChange} name="name" id="" />
                <br />
                <label>Email</label>
                <input type="email" ref={email} onKeyUp={handlleChange} name="email" id="" />
                <br />
                <label>Phone</label>
                <input type="text" ref={phone} onKeyUp={handlleChange} name="phone" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <br />
            <br />
            <br />
            <center>

                <table border={1} rules='all'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    {data.map((result, index) => {
                        return (
                            <>
                                <tr>
                                    <td>{result.name}</td>
                                    <td>{result.email}</td>
                                    <td>{result.phone}</td>
                                    <td><button onClick={() => {
                                        deleteData(index)
                                    }}>Delete</button>
                                        <button onClick={() => {
                                            updateData(result, index)
                                        }}>Update</button>
                                    </td>

                                </tr>
                            </>
                        )
                    })}
                </table>
            </center>

        </>
    );
}

export default Crud;