import './RatingsFilter.css'
import { useState } from 'react';

const RatingsFilter = () => {

  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  // this holds our items, IF WE SELECT SOMETHING   with that object, properties, and values
  const toggle = () => setOpen(!open)
  function handleClick(item) {

  }

  return (
    <div className='dropdown-container'>
      <div 
        tabIndex={0} 
        className='dropdown-header' 
        role='button' 
        onKeyPress={() => toggle(!open)} 
        onClick={() => toggle(!open)}>

          <div className='dropdown-header__title'>
            <p className='dropdown-header__title--bold'>
              Title :)!
            </p>
          </div>

          <div className='dropdown-header__action'>
            <p>
              {open ? 'Close' : 'Open'}
            </p>
          </div>
      </div>
    </div>
  )
}

export default RatingsFilter