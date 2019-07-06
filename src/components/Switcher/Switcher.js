import React from 'react';
import './Switcher.css'

const Switcher = ({ switchMode }) => {
  return (
        <div className='Switcher'>
          <button onClick={() => switchMode("upload")}>Upload an image</button>
          <span>or</span>
          <button onClick={() => switchMode("link")}>paste a link</button>          
        </div>
  );
}

export default Switcher;