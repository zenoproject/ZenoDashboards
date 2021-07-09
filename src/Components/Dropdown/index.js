import React from 'react';
import './index.scss';

export function Dropdown({ children, text, customButton, addOnClass }) {
  let btn = (
    <a href class='tfb'>
      <span class='hh'>{text}</span>
      <svg class='fill-current h-4 w-4' viewBox='0 0 20 20'>
        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
      </svg>
    </a>
  );
  if (customButton) btn = customButton;

  return (
    <div className={addOnClass ? 'dropdown collapse' : 'dropdown'}>
      {btn}
      <div className='dropdown-menu'>{children}</div>
    </div>
  );
}
