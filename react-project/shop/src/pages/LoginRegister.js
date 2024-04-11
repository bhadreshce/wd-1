import axios from 'axios'
import React, { useRef,useState } from 'react'
import Register from './Register'
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {

  const navigate = useNavigate()
  const [RegisterData, setRegisterdata] = useState({name:'',email:'',password:''})
  const [regiError, setregisError] = useState({})

 
 
 
 
 
 
 
 
  const regiOnchange = (e) => { 
    setRegisterdata({ ...RegisterData , [e.target.name]:e.target.value })
  }
  const submitRegister = (e) => {
            e.preventDefault()

    let validationErorror = {}

    if (RegisterData.name == '') { 
      validationErorror.name = 'please add valid name'
      
    }

    setregisError(validationErorror)
    if (Object.keys(validationErorror).length == 0) {
      alert('submit succes')
         navigate('/reg');
    }
   }
  return (
      <>
        <main>
    <div class="mb-4 pb-4"></div>
    <section class="login-register container">
      <h2 class="d-none">Login & Register</h2>
      <ul class="nav nav-tabs mb-5" id="login_register" role="tablist">
        <li class="nav-item" role="presentation">
          <a class="nav-link nav-link_underscore active" id="login-tab" data-bs-toggle="tab" href="#tab-item-login" role="tab" aria-controls="tab-item-login" aria-selected="true">Login</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link nav-link_underscore" id="register-tab" data-bs-toggle="tab" href="#tab-item-register" role="tab" aria-controls="tab-item-register" aria-selected="false">Register</a>
        </li>
      </ul>
      <div class="tab-content pt-2" id="login_register_tab_content">
        <div class="tab-pane fade show active" id="tab-item-login" role="tabpanel" aria-labelledby="login-tab">
          <div class="login-form">
            <form name="login-form" class="needs-validation" novalidate>
              <div class="form-floating mb-3">
                <input name="login_email" type="email" class="form-control form-control_gray" id="customerNameEmailInput1" placeholder="Email address *" required />
                <label for="customerNameEmailInput1">Email address *</label>
              </div>
    
              <div class="pb-3"></div>
    
              <div class="form-floating mb-3">
                <input name="login_password" type="password" class="form-control form-control_gray" id="customerPasswodInput" placeholder="Password *" required />
                <label for="customerPasswodInput">Password *</label>
              </div>
    
              <div class="d-flex align-items-center mb-3 pb-2">
                <div class="form-check mb-0">
                  <input name="remember" class="form-check-input form-check-input_fill" type="checkbox" value="" id="flexCheckDefault1" />
                  <label class="form-check-label text-secondary" for="flexCheckDefault1">Remember me</label>
                </div>
                <a href="reset_password.html" class="btn-text ms-auto">Lost password?</a>
              </div>
    
              <button class="btn btn-primary w-100 text-uppercase" type="submit">Log In</button>
    
              <div class="customer-option mt-4 text-center">
                <span class="text-secondary">No account yet?</span>
                <a href="#register-tab" class="btn-text js-show-register">Create Account</a>
              </div>
            </form>
          </div>
        </div>
      {/* register  */}
        <div class="tab-pane fade" id="tab-item-register" role="tabpanel" aria-labelledby="register-tab">
          <div class="register-form">
            <form onSubmit={submitRegister} name="register-form" class="needs-validation" novalidate>
              <div class="form-floating mb-3">
                <input name="name" onChange={regiOnchange} type="text"  class="form-control form-control_gray" id="customerNameRegisterInput" placeholder="Username"  />
                    <label for="customerNameRegisterInput">Username</label>
                    {regiError.name && (<span> { regiError.name }</span>) }
                                    
              </div>
    
              <div class="pb-3"></div>

              <div class="form-floating mb-3">
                <input name="email"  type="email"  onChange={regiOnchange}  class="form-control form-control_gray" id="customerEmailRegisterInput" placeholder="Email address *"  />
                                      <label for="customerEmailRegisterInput">Email address *</label>
                                      
              </div>
    
              <div class="pb-3"></div>
    
              <div class="form-floating mb-3">
                <input name="password"  onChange={regiOnchange} type="password" class="form-control form-control_gray" id="customerPasswodRegisterInput" placeholder="Password *"  />
                                      <label for="customerPasswodRegisterInput">Password *</label>
                                      
              </div>
    
              <div class="d-flex align-items-center mb-3 pb-2">
                <p class="m-0">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
              </div>
    
              <input class="btn btn-primary w-100 text-uppercase"  value={'Register'} type="submit" />
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