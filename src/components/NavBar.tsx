import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logout } from '../store/userSlice'

export const NavBar = () => {

    const dispatch = useDispatch()
    const logout = () => {
        dispatch(Logout())
    }
    return (
        <>
            <div className='navBar'>
                <Link className='navbarMenu' to={`/home`}>Home</Link>
                <Link className='navbarMenu' to={`/projects`}>Projects</Link>
                <Link className='navbarMenu' to={`/learned`}>Learned</Link>
                <Link className='navbarMenu' to={`/about`}>About</Link>
                <Link className='navbarMenu' to={`/contact`}>Contact</Link>
                <button className='logout-button' onClick={() => logout()}>
                    Logout
                </button>
            </div>
        </>

    )
}
