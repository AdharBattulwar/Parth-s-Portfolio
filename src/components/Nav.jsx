import React from 'react'
import { Link } from 'react-router-dom'
import '../Stylesheet/Nav.css'
import Logo from '../Icons/Logo.svg'
import LinkedINLogo from '../Icons/LinkedInLogo.svg'
import MailLogo from '../Icons/MailLogo.svg'
const Nav = () => {
  return (
    <>
    <nav>
        <div className='NavbarLeft'>
            <Link to='/'>
            <img src={Logo} alt='img'></img>
            </Link>
        </div>
        <div className='NavbarRight'>
            <div className='NavContent'>
                <Link to='/' className='NavContentAboutMe'>
                About Me
                </Link>
            </div>
            <div className='NavContent'>
                <Link to='/' className='NavContentWork'>
                Work
                </Link>
            </div>
            <div className='NavContent'>
                <Link to='https://www.linkedin.com/in/parth-dake-232790215'>
                <img className='NavContentLinkedIn' src={LinkedINLogo} alt='img'></img>
                </Link>
            </div>
            <div className='NavContent'>
                <Link to='mailto: parthdake1911@gmail.com'>
                <img className='NavContentMail' src={MailLogo} alt='img'></img>
                </Link>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Nav
