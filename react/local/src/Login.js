import React from 'react'

const Login = () => {
    const submitdata = (e) => {
        
        e.preventDefault()
        var name = document.getElementById('name').value
        var pass = document.getElementById('pass').value
        var localName = localStorage.getItem('name')
        var localPass = localStorage.getItem('password')
        console.log(name, pass);
        console.log(localName, localPass);

        if (localPass == pass && localName == name) {
            alert('login succssesfully')
        } else {
            alert('login not succssesfully')
        }

    }
    return (
        <>
            <form onSubmit={submitdata}>
                <label htmlFor="">Name</label>
                <input type="text" id='name' />
                <br />
                <label htmlFor="">Password</label>
                <input type="password" id='pass' />
                <br />
                <input type='submit' value={'Submit'} />
            </form>
        </>
    )
}

export default Login