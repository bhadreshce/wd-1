import React, { useState, useEffect } from 'react';

function Crud() {
    const [input, setInput] = useState({ name: '', email: '', phone: '' });
    const [data, setData] = useState([])

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
        setData([...data, input])

    }


    return (
        <>
            <form onSubmit={handlleSubmit}>
                <label>Name</label>
                <input type="text" defaultValue={input.name} onKeyUp={handlleChange} name="name" id="" />
                <br />
                <label>Email</label>
                <input type="email" defaultValue={input.email} onKeyUp={handlleChange} name="email" id="" />
                <br />
                <label>Phone</label>
                <input type="text" defaultValue={input.phone} onKeyUp={handlleChange} name="phone" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default Crud;