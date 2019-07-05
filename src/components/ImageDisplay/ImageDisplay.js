import React from 'react';
import './ImageDisplay.css'

const ImageDisplay = ({ imageUrl }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = 'https://st.ilfattoquotidiano.it/wp-content/uploads/2018/03/03/instagram275.jpg'
  }
  return (
    <div className='ImageDisplay'>
        <img id="image" onError={addDefaultSrc} alt='' src={imageUrl}/>
    </div>
  );
}

export default ImageDisplay;