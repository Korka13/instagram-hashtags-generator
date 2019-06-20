import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <div className='center'>
        <div className='form center pa2 br3 shadow-5 ma3'>
        <button
            className='w-30 grow f4 link ph3 pv2 dib white br2 bg-gray hover-near-black bg-animate hover-bg-light-yellow'
            onClick={onButtonSubmit}
          >get hashtags</button>
          <input className='f4 pa2 w-70 center br2' type='tex' onChange={onInputChange}/>
          
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;