import React, { useEffect } from 'react'
import { NavBar } from '../components/NavBar'
import { useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'
import { useNavigate } from 'react-router-dom'

export const Master = () => {
    const userInfo = useSelector((state: RootState) => state.userInfo)
    const navigate = useNavigate();
    useEffect(() => {
        if (userInfo.isMaster) {
            navigate('/master')
        } else {
            navigate('/home');

        }

    }, []);
    return (
        <>
            <NavBar>

            </NavBar>
            <div>Master</div>
        </>
    )
}
