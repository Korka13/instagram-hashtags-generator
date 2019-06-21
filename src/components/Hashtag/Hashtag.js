import React from 'react';
import Tilt from 'react-tilt';
import Delay from 'react-delay';
import './Hashtag.css';
import ButtonCopy from '../ButtonCopy/ButtonCopy';

const Hashtag = ({justifySelf, alignSelf, hashtag}) => {
    return (
      <div className="Hashtag" 
            style={{
              justifySelf, 
              alignSelf
            }}
            >
            
        <Tilt              
              options={{ max : 100 }} 
              className="Tilt br-pill"              
               >
               <Delay wait={Math.random()*4000}>
                <ButtonCopy copyText={hashtag} displayText={hashtag} />
               </Delay>
          </Tilt>
      </div>
    )
  }

export default Hashtag;