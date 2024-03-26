import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate()
    const [loginInfo, setLoginInfo] = useState("id must include @")
    const [pwrdInfo, setPwdInfo] = useState("pwd must be longer than 15 characters")
    const [isSuccess, setIsSuccess] = useState(true)

    const loginButton = () => {
        if (isSuccess) {
            navigate(`/home`)
        }
    }

    return (
        <div className='login-main'>
            <div className='login-card'>
                <div className='login-login'>
                    <FaUser className='login-logo'></FaUser>
                    <input className='login' type='email' placeholder='Email'></input>
                    <div className='login-idhint'>
                        ID: {" "}{loginInfo}
                    </div>
                </div>
                <div className='login-password'>
                    <FaKey className='login-logo'></FaKey>
                    <input className="password" type='password' placeholder='Password'></input>
                    <div className='login-idhint'>
                        PWD:{" "}{pwrdInfo}
                    </div>
                </div>
                <button className='login-button' onClick={loginButton}>
                    Login
                </button>
                <div className='login-already'>
                    <Link to='register'>
                        New user?
                    </Link>
                    <Link to='findID'>
                        Forgot ID?
                    </Link>
                    <Link to='findPWD'>
                        Forgot Password?
                    </Link>
                </div>
            </div>
        </div>
    )
}