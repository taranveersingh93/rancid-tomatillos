import './Navbar.css'
import tomatoIcon from '../../images/tomato.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='user-info'>
        Welcome, user!
      </div>
      <div className='logo-header'>
        <img src={tomatoIcon} className="tomato-logo flicker-slow" alt="logo" />
        <p className='neon'>
          RANCID TO<span className="flicker-fast">M</span>A<span className="flicker-fast">T</span>OES
        </p>
      </div>
    </div>
  )
}

export default Navbar;