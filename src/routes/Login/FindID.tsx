import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export const FindID = () => {
    const navigate = useNavigate();

    return (
        <div className='login-main'>
            <div className='login-card'>
                <IoIosArrowBack className='backbutton' onClick={() => { navigate(`/`) }}></IoIosArrowBack>
                <div className='register-back'>
                    Find ID
                </div>
                <div className='register-input'>
                    <div className='register-login'>
                        Id: <input className="register-id" type='email'></input>
                    </div>
                    <div className='register-nick'>
                        Nickname: <input className="register-nick"></input>
                    </div>
                    <div className='register-password'>
                        pwd: <input className="register-pwd" type='email'></input>
                    </div>
                </div>

            </div>
        </div>)
}
