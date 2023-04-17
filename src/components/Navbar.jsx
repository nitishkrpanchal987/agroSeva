import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <>
        <navbar className="nav">
            <div className="yellow"></div>
            <div className="black">
                <div className="logo">AgroSeva</div>
                <div className="content">
                <ul className="list">
                  <li><Link to='/' className='home'>Home</Link></li>
                        <li>Contact</li>
                        <li>Services</li>
                        <li><Link to='/donate' className='ab'>About</Link></li>
                    </ul>
                </div>
            </div>

        </navbar>
    </>
  )
}

export default Navbar
