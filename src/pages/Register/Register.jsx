import React, { useState } from 'react'
import './Register.scss'
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"
let user = {
    name: 'ali',
    password: 123
}

function Register() {
    document.title = "Register"
    var [password, setPassowrd] = useState(true)
    let navigate = useNavigate()
    function fnForm(e) {
        e.preventDefault()
        let u = e.target.username.value
        let p = e.target.password.value
        if (user.name == u && user.password == p) {
            navigate('/')
            window.localStorage.setItem('token', 'FTJFDRRRKLUIY')
        } else {
            navigate('/')

        }
    }

    return (
        <div className='login_page'>
            <div className="login_img_hover">
                <h2>Lorem Ipsum is simply </h2>
                <p>Lorem Ipsum is simply </p>
            </div>
            <div className="reg_login_form_hover">
                <h3>Welcome to lorem..!</h3>

                <div className="reg_log_btns_hover">
                    <Link to="/login" className="reg_log_btn">Login</Link>
                    <button className='reg_log_btn active'>Register</button>
                </div>

                <p className='coment_reg'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <form className='reg_log_form' onSubmit={fnForm} action="#">
                    <label className='form_label'>User name</label>
                    <input type="text" name="username" className='inp' placeholder='Enter your Email Address' />
                    <label className='formm__p'>Password</label>
                    <input type="text" name="password" className='inp' placeholder='Enter your User name' />
                    <label className='formm__p'>Password</label>
                    <div className="password_hover">
                        <input type={password ? "password" : "text"} name="password" className='inp' placeholder='Enter your Password' />
                        <i onClick={()=> setPassowrd(!password)} className={password ? 'bi bi-eye-slash-fill' : "bi bi-eye-fill"}></i>
                    </div>
                    <div className="lg_btn_hover">
                        <button type='submit' className='login_btn'>Register</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register
