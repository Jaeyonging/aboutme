import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";


export const Register = () => {
    const navigate = useNavigate();

    return (
        <div className='login-main'>
            <div className='login-card'>
                <IoIosArrowBack className='backbutton' onClick={() => { navigate(`/`) }}></IoIosArrowBack>
                <div className='register-back'>
                    Register
                </div>
                <div className='register-input'>
                    <div>
                        Id: <input className="register-id" type='email'></input>
                    </div>
                    <div>
                        Nickname: <input className="register-nick"></input>
                    </div>
                    <div>
                        pwd: <input className="register-pwd" type='email'></input>
                    </div>
                    <div>
                        Re-pwd: <input className="register-pwd" type='email'></input>
                    </div>
                </div>
                <button className='register-button'>Register</button>
            </div>
        </div >
    )
}
