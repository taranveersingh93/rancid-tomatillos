import './Navbar.css'
import tomatoIcon from '../../images/tomato.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-header'>
        <img src={tomatoIcon} className="tomato-logo flicker-normal" alt="logo" />
        <div className='logo-text'>
          <p className='neon'>
            RANCID
          </p>
          <p className='neon'>
            TOMATI<span className="flicker-fast">L</span><span className="flicker-slow">L</span>OS
          </p>
        </div>
      </div>
      <div className='user-info'>
        Welcome, user!
      </div>
    </div>
  )
}

export default Navbar;