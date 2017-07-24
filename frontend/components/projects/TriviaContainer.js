import React from 'react';
import Trivium from './Trivium';

const TriviaContainer = (props) => {
  let trivia = props.data.map((trivium) => {
    return <Trivium title={trivium.title}
                   excerpt={trivium.excerpt}
                   img={trivium.img_src}
                   key={trivium.id} />
  }); 
  return (
    <div>
      <ul>
        {trivia}    
      </ul>
    </div>
  );
}

export default TriviaContainer;