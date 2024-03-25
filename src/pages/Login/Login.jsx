import React, { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"
let user = {
    name: 'ali',
    password: 123
}

function Login() {
    document.title = "Login"
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
                    <button className="reg_log_btn active">Login</button>
                    <Link to="/register" className='reg_log_btn'>Register</Link>
                </div>

                <p className='coment_reg'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <form className='reg_log_form' onSubmit={fnForm} action="#">
                    <label className='form_label'>User name</label>
                    <input type="text" name="username" className='inp' placeholder='Enter your User name' />
                    <label className='formm__p'>Password</label>
                    <input type="text" name="password" className='inp' placeholder='Enter your Password' />

                    <div className="remember_me">
                        <span className='jcsb_span'>
                            <input id='checkbox' type="checkbox" />
                            <label htmlFor='checkbox'>Rememebr me</label>
                        </span>
                        <a className='fpassword'>Forgot Password ?</a>
                    </div>
                    <div className="lg_btn_hover">
                        <button type='submit' className='login_btn'>Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login