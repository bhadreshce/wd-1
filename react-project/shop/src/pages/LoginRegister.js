import axios from 'axios'
import React, { useRef, useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
  const navigate = useNavigate()
  const notify = () => toast("Wow so easy!");

  //register 
  const [regisData, setRegisdata] = useState({ name: '', email: '', password: '', isadmin: false })
  const [regisError, setRegError] = useState({})

  //login
  const [loginData, setLogindata] = useState({ email: '', password: '' })
  const [loginError, setLoginError] = useState({})


  const loginChange = (e) => {
    const { name, value } = e.target
    setLogindata({ ...loginData, [name]: value })
  }

  const loginSubmit = async (e) => {

    e.preventDefault()
    var re = /\S+@\S+\.\S+/;
    let validateLogin = {}

    if (loginData.password == '') {
      validateLogin.password = 'please enter valid password'
    }

    if (loginData.email == '' || re.test(loginData.email) == false) {
      validateLogin.email = 'please enter valid mail'
    }

    setLoginError(validateLogin)

    if (Object.keys(validateLogin).length == 0) {
      // axios.get(`http://localhost:8000/user?email=${loginData.email}`).then((result) => {
      //   console.log(result.data[0]);

      // })

      try {
        let logindata = await axios.get(`http://localhost:8000/user?email=${loginData.email}`)
        console.log(logindata.data[0]);

        if (logindata.data[0].password == loginData.password) {

          localStorage.setItem('user', logindata.data[0].name)
          localStorage.setItem('admin', logindata.data[0].isadmin)
            toast.success('login susseccfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
          if (logindata.data[0].isadmin) {
            navigate('/admin')

          } else {
            navigate('/')
          }
        } else {
          setLoginError({ password: 'pleasse enete valid password' })
        }

      } catch (error) {
        setLoginError({ email: 'pleasse enete valid email' })
      }

    }

  }




  //register
  const regiChange = (e) => {

    if (e.target.name == 'isadmin') {
      setRegisdata({ ...regisData, [e.target.name]: e.target.checked })
    } else {
      const { name, value } = e.target
      setRegisdata({ ...regisData, [name]: value })
    }



  }
  const registerSubmit = (e) => {
    e.preventDefault()
    var re = /\S+@\S+\.\S+/;
    console.log(regisData);
    let validateRegister = {}
    if (regisData.name == '') {
      validateRegister.name = 'please enter valid name'
    }

    if (regisData.password == '') {
      validateRegister.password = 'please enter valid password'
    }

    if (regisData.email == '' || re.test(regisData.email) == false) {
      validateRegister.email = 'please enter valid mail'
    }

    setRegError(validateRegister)

    if (Object.keys(validateRegister).length == 0)
      axios.post('http://localhost:8000/user', regisData).then((res) => {
        toast.success('register susseccfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        // navigate('/login')
        window.location.href = '/login'

      })
  }
  return (
    <>
      <ToastContainer />
      <main>
        <div className="mb-4 pb-4"></div>
        <section className="login-register container">
          <h2 className="d-none">Login & Register</h2>
          <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link nav-link_underscore active" id="login-tab" data-bs-toggle="tab" href="#tab-item-login" role="tab" aria-controls="tab-item-login" aria-selected="true">Login</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link nav-link_underscore" id="register-tab" data-bs-toggle="tab" href="#tab-item-register" role="tab" aria-controls="tab-item-register" aria-selected="false">Register</a>
            </li>
          </ul>
          <div className="tab-content pt-2" id="login_register_tab_content">
            <div className="tab-pane fade show active" id="tab-item-login" role="tabpanel" aria-labelledby="login-tab">
              <div className="login-form">
                <form name="login-form" className="needs-validation" onSubmit={loginSubmit} >
                  <div className="form-floating mb-3">
                    <input onChange={loginChange} name="email" type="email" className="form-control form-control_gray" id="customerNameEmailInput1" placeholder="Email address *" />
                    <label for="customerNameEmailInput1">Email address *</label>
                    {loginError.email && (<span style={{ color: 'red' }}>{loginError.email}</span>)}
                  </div>

                  <div className="pb-3"></div>

                  <div className="form-floating mb-3">
                    <input onChange={loginChange} name="password" type="password" className="form-control form-control_gray" id="customerPasswodInput" placeholder="Password *" />
                    <label for="customerPasswodInput">Password *</label>
                    {loginError.password && (<span style={{ color: 'red' }}>{loginError.password}</span>)}
                  </div>

                  <div className="d-flex align-items-center mb-3 pb-2">
                    <div className="form-check mb-0">
                      <input name="remember" className="form-check-input form-check-input_fill" type="checkbox" value="" id="flexCheckDefault1" />
                      <label className="form-check-label text-secondary" for="flexCheckDefault1">Remember me</label>
                    </div>
                    <a href="reset_password.html" className="btn-text ms-auto">Lost password?</a>
                  </div>

                  <input className="btn btn-primary w-100 text-uppercase" value={'Login'} type="submit" />


                </form>
              </div>
            </div>
            {/* register  */}
            <div className="tab-pane fade" id="tab-item-register" role="tabpanel" aria-labelledby="register-tab">
              <div className="register-form">
                <form onSubmit={registerSubmit} name="register-form" className="needs-validation" novalidate>
                  <div className="form-floating mb-3">
                    <input name="name" type="text" onChange={regiChange} className="form-control form-control_gray" id="customerNameRegisterInput" placeholder="Username" />
                    <label for="customerNameRegisterInput">Username</label>
                    {regisError.name && (<span style={{ color: 'red' }}>{regisError.name}</span>)}

                  </div>

                  <div className="pb-3"></div>

                  <div className="form-floating mb-3">
                    <input name="email" onChange={regiChange} type="text" className="form-control form-control_gray" id="customerEmailRegisterInput" placeholder="Email address *" />
                    <label for="customerEmailRegisterInput">Email address *</label>
                    {regisError.email && (<span style={{ color: 'red' }}>{regisError.email}</span>)}

                  </div>

                  <div className="pb-3"></div>

                  <div className="form-floating mb-3">
                    <input name="password" onChange={regiChange} type="password" className="form-control form-control_gray" id="customerPasswodRegisterInput" placeholder="Password *" />
                    <label for="customerPasswodRegisterInput">Password *</label>
                    {regisError.password && (<span style={{ color: 'red' }}>{regisError.password}</span>)}
                  </div>

                  <div className="form-floating mb-3">
                    <input type="checkbox" name="isadmin" onChange={regiChange} id="" />

                    <label for="customerPasswodRegisterInput">is Admin *</label>

                  </div>

                  <div className="d-flex align-items-center mb-3 pb-2">
                    <p className="m-0">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                  </div>

                  <input className="btn btn-primary w-100 text-uppercase" value={'Register'} type="submit" />
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default LoginRegister