import React from 'react';
import Hashtag from '../Hashtag/Hashtag';
import './Hashtags.css';


const Hashtags = ({hashtags}) => {
  // const allHashtags = hashtags.join(' ');
  const position = ['start', 'end', 'center'];
  const justifyRandoms = hashtags.map(h => position[Math.floor(Math.random()*position.length)])
  const alignRandoms = hashtags.map(h => position[Math.floor(Math.random()*position.length)])
  return (
    <div className="Hashtags">
        {hashtags.map((h, i) => (
          <Hashtag key={i} justifySelf={justifyRandoms[i]} alignSelf={alignRandoms[i]} hashtag={h} />
        ))}
    </div>
  );
}

export default Hashtags;