import React from 'react';
import './ImageLinkForm.css';
import gear from './gearGray.svg';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
        <div className='ImageLinkForm'>
          <button
            className='ImageLinkForm-button'
            onClick={onButtonSubmit}
          >
            <img src={gear} alt="gear" />
          </button>
          <input className='ImageLinkForm-form' type='tex' onChange={onInputChange}/>
        </div>
  );
}

export default ImageLinkForm;