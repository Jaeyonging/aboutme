import React, { useEffect, useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../../firebase/firebaseFetch';
import Lottie from 'lottie-react';
import WelcomLogo from '../../assets/lottie/welcome.json'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/configureStore';
import { LoginSuccess, Logout, SetEmail } from '../../store/userSlice';

export const Login = () => {
    const navigate = useNavigate();
    const [userID, setUserId] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [loginInfo, setLoginInfo] = useState("");
    const [pwrdInfo, setPwdInfo] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [isLoginInfo, setIsLoginInfo] = useState("")

    const userInfo = useSelector((state: RootState) => state.userInfo)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(Logout())
    }, [])

    useEffect(() => {
        if (isLogin) {
            if (userInfo.isMaster) {
                navigate('/master')
            } else {
                navigate('/home');

            }
        }
    }, [isLogin]);

    const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setUserId(value);
        if (value.includes('@')) {
            setLoginInfo("");
        } else {
            setLoginInfo("ID: id must include @");
        }
    };

    const handleUserPwdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setUserPwd(value);
        if (value.length > 5) {
            setPwdInfo("");
        } else {
            setPwdInfo("PWD: pwd must be longer than 5 characters");
        }
    };

    const submitHandle: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setIsLoginInfo("")

        try {
            const user = await LoginUser(userID, userPwd);
            console.log('Login successful for user:');
            setIsLogin(true);
            dispatch(SetEmail(userID))
            dispatch(LoginSuccess())
        } catch (error: any) {
            console.error('Login failed:', error.message);
            setIsLoginInfo("Failed to login")
            setIsLogin(false);
        }
    };

    return (

        <div className='login-main'>
            <div className='login-card'>
                <Lottie animationData={WelcomLogo}></Lottie>
                <form onSubmit={submitHandle}>
                    <div className='login-login'>
                        <FaUser className='login-logo'></FaUser>
                        <input className='login' type='email' placeholder='Email' value={userID} onChange={handleUserIdChange}></input>
                        <div className='login-idhint'>
                            {loginInfo}
                        </div>
                    </div>
                    <div className='login-password'>
                        <FaKey className='login-logo'></FaKey>
                        <input className="password" type='password' placeholder='Password' value={userPwd} onChange={handleUserPwdChange}></input>
                        <div className='login-idhint'>
                            {pwrdInfo}
                        </div>
                    </div>
                    <div className='login-logininfo'>
                        {isLoginInfo}
                    </div>
                    <button className='login-button' type='submit'>
                        Login
                    </button>
                </form>
                <div className='login-already'>
                    <Link to='/register'>
                        New user?
                    </Link>
                    <Link to='/findID'>
                        Forgot ID?
                    </Link>
                    <Link to='/findPWD'>
                        Forgot Password?
                    </Link>
                </div>
            </div>
        </div>
    );

};
