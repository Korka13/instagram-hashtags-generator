import React from 'react';
import './ImageDisplay.css'

const ImageDisplay = ({ imageUrl, defaultImage }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = defaultImage;
  }
  return (
    <div className='ImageDisplay'>
        <img id="image" onError={addDefaultSrc} alt='' src={imageUrl}/>
    </div>
  );
}

export default ImageDisplay;