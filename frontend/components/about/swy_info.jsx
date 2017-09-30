import React from 'react';
import ReactDOM from 'react-dom';
import PublicNavigation from '../PublicNavigation';

const SwyInfo = () => (
  <div className="swy-page-body">
    <header className='home-header'>
      <PublicNavigation />
    </header>
      <img className="swy-img" src='http://res.cloudinary.com/swy/image/upload/a_hflip/v1500934478/swy_rsd2cc.jpg'/>
    <h3 className='temporal'>About Me</h3>
    <div className='about-block'>
      <code>     
        My name is Swy, and I am a self-taught Fullstack Web Developer. Over halfway through college I came to the realization that I had a lopsided interest in one specific area (physical chemistry) of my major relative to other areas. This interest was driven, in part, by the analytical nature of the course that required careful mathematical analysis and computational modeling (of molecules). I loved using Mathematica and being able to write my own code to suit my needs, especially during my year-long senior thesis project on analyzing liquid matrices. Not satisfied with just Mathematica, I began learning Ruby, then JavaScript, and then I just couldn’t stop there.  I have since built a strong background in Ruby / Rails and a few JavaScript frameworks through a combination of immersive software bootcamp and disciplined self-teaching.
      </code>
      <hr />
      <code>
        I worked as a data security intern at Free Geek, Portland, OR for the summer of 2016. I consider myself to be a self-disciplined, highly motivated, eager and quick learner. I have spent over 2000 hours coding, including a regular average of 70hrs of coding/week from Jan 2017 - September 2017. I have gained a strong knowledge in Data Structures, Algorithms, Space and Time complexities, and OOP design patterns. When writing code I personally gravitate toward finding a balance between clean, concise code and being detail-oriented enough for others to understand my code in my absence. I focus mainly on Rails for my backend and React-Redux for my frontend with PostgreSQL as my preferred database. However, I am open to learning and picking up other languages and frameworks as I expand my technical expertise. 
      </code>
      <hr />
      <code>
        Personally I’m still very much a kid at heart, but very organized and diligent at work. I'm also an enthusiastic team player who is social media shy but very warm and lively in person. I played 4 years of college soccer and can be quite jovial in the appropriate settings and time.
      </code>
      <hr className='about-hr'/>
    </div>
    
  </div>
);

export default SwyInfo;