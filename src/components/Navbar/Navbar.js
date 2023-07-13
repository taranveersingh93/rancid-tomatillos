import './Navbar.css'
import tomatoIcon from '../../images/tomato.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <div className='logo-header'>
          <img src={tomatoIcon} className="tomato-logo flicker-normal" name="tomato-image" alt="logo" />
          <div className='logo-text'>
            <h1 className='neon'>
              RANCID
            </h1>
            <h2 className='neon'>
              TOMATI<span className="flicker-fast">L</span><span className="flicker-slow">L</span>OS
            </h2>
          </div>
        </div>
      </Link>
      <div className='user-info'>
        Welcome, user!
      </div>
    </div>
  )
}

export default Navbar;