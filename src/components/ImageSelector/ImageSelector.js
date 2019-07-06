import React from 'react';
import './ImageSelector.css';
import gear from './gearGray.svg';

const ImageSelector = ({ onInputChange, onButtonSubmit, previewFile, mode }) => {
  return (
        <div className='ImageSelector'>
          <button
            className='ImageSelector-button'
            onClick={onButtonSubmit}
          >
            <img src={gear} alt="gear" />
          </button>
          {
            mode === "link"
            ? <input className='ImageSelector-input-link' type='tex' placeholder="Paste a photo link..." onChange={onInputChange}/>
            : <div className="ImageSelector-file">
                <label htmlFor="ImageSelector-input-file" className='ImageSelector-label'>Click or Tap here to select an image...</label>
                <input id="ImageSelector-input-file" className='ImageSelector-input-file' type='file' accept="image/*" onChange={previewFile}/>
              </div>
          }
          
        </div>
  );
}

export default ImageSelector;