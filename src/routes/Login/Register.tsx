import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { RegisterUser } from '../../firebase/firebaseFetch';

export const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 폼 제출 시 페이지 리로딩 방지

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        try {
            const user = await RegisterUser(email, password);
            console.log('Registration successful for user:', user);
            navigate('/');
        } catch (error: any) {
            console.error('Registration failed:', error.message);
            setErrorMessage(error.message);
        }
    }

    return (
        <div className='login-main'>
            <div className='login-card'>
                <IoIosArrowBack className='backbutton' onClick={() => navigate(`/`)} />
                <div className='register-back'>
                    Register
                </div>
                <form className='register-form' onSubmit={handleRegister}>
                    <div className='register-input'>
                        <div>
                            Email: <input className="register-id" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            Password: <input className="register-pwd" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            Confirm Password: <input className="register-pwd" type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    </div>
                    <button className='register-button' type="submit">Register</button>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </form>
            </div>
        </div>
    );
};
