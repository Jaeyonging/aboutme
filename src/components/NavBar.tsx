import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className='navBar'>
            <Link className='navbarMenu' to={`/home`}>Home</Link>
            <Link className='navbarMenu' to={`/projects`}>Projects</Link>
            <Link className='navbarMenu' to={`/blogs`}>Blogs</Link>
            <Link className='navbarMenu' to={`/about`}>About</Link>
            <Link className='navbarMenu' to={`/contact`}>Contact</Link>
        </div>
    )
}
