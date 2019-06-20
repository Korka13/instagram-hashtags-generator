import React from 'react';
import Tilt from 'react-tilt';
import Delay from 'react-delay';
import './Hashtag.css'


const Hashtag = ({hashtags}) => {
  // const allHashtags = hashtags.join(' ');
  const position = ['start', 'end', 'center'];
  const justifyRandoms = hashtags.map(h => position[Math.floor(Math.random()*position.length)])
  const alignRandoms = hashtags.map(h => position[Math.floor(Math.random()*position.length)])
  return (
    <div className="Hashtag">
        {hashtags.map((h, i) => (
          <Tilt 
              key={i.toString()}                
              options={{ max : 100 }} 
              className="Tilt br-pill"
              style={{
                justifySelf: justifyRandoms[i], 
                alignSelf: alignRandoms[i], 
                opacity: 1
              }}
               >
               <Delay wait={Math.random()*4000}>
                 <p className="br-pill shadow-5 pa4 bg-light-gray">
                  {h}
                 </p>                
               </Delay>            
          </Tilt>
        ))}
    </div>
  );
}

export default Hashtag;