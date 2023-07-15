import './RatingsFilter.css'
import { useState } from 'react';

const RatingsFilter = ({ title, items }) => {

  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  // this holds our items, IF WE SELECT SOMETHING   with that object, properties, and values
  const toggle = () => setOpen(!open)
  
  function handleOnClick(item) {

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

      {open && (
        <ul className='dropdown-list'>
          {items.map(item => (
            <li className='dropdown-list-item' key={item.id}>
              <button type='button'onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default RatingsFilter