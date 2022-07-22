import React from 'react'
import './navbar.css'
export default function navbar() {
  return (
   <>
   <div className='navbar'>
    <div class='container-navbar '>
      <a href='/'> <img id='navbarimg' src='https://img.freepik.com/premium-vector/clocktime-logo-icon-illustration-design-vector-template_598213-2171.jpg?w=2000' alt='logo'/>
     React Clock</a>
        <ul>
            <li className='li-nav'><a href='/' >Home</a></li>
            <li className='li-nav'><a href='/'>Contact Us</a></li>
            <li className='li-nav'><a href='/'>Form</a></li>
            <li className='li-nav'><a href='/'>Login</a></li>
        </ul>
    </div>
   </div>
   </>
  )
}
