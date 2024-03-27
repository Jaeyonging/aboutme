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
        e.preventDefault();

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
            if (error.code === "auth/weak-password") {
                setErrorMessage("Password should be at least 6 characters");
            } else if (error.code == "auth/invalid-email") {
                setErrorMessage("Check your email address");

            } else if (error.code == "auth/email-already-in-use") {
                setErrorMessage("Your email address already exists");

            } else {
                setErrorMessage(error.message);
            }
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
                        <div className='register-cont'>
                            <div className='register-title'>
                                Email:
                            </div>
                            <input className="register-id" type='email' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
                        </div>
                        <div className='register-cont'>
                            <div className='register-title'>
                                Password:
                            </div>
                            <input className="register-pwd" type='password' value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
                        </div>
                        <div className='register-cont'>
                            <div className='register-title'>
                                Confirm Password:
                            </div>
                            <input className="register-pwd" type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="off" />
                        </div>
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}

                    <button className='register-button' type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};
