import React from 'react';
import ReactDOM from 'react-dom';
import Navigationa from '../navigationa';

const SwyInfo = () => (
  <div className="app">
    <header className='loggedhome-header'>
      <Navigationa />
    </header>
    {/* <h2 className='tempora'>This is the SwyInfo Component</h2> */}
    <h3 className='temporal'>About Me</h3>
    <div>
      <p className='about-me'>     
        My name is Swy, and I am a self-taught Fullstack Web Developer. While studying chemistry in college I developed acute interest in computational modeling (of molecules), which furthered my exposure to writing codes (with Mathematica) to process data in my upper chemistry and physics lab works. Taking at least one quantitative (physics / chemistry) lab course in each of my 8 college semesters helped me find ways to optimize my time resources by writing efficient algorithms to allow me more time to work on practical results. 
      </p>
      <hr className='about-hr'/>
      <p className='about-me'>
        I consider myself to be a self-disciplined, highly motivated, eager and quick learner.
        I interned as a part-time hardare …. during my last semester in college and a full time for the summer of 2016. I have spent over 2000 hours coding, including a regular average of 70hrs of coding/week from Jan 2017 - July 2017, and still keeping that pace. I have a strong knowledge of Data Structures, Algorithms, Space and Time complexities, and OOP design patterns, and when writing code I gravitate toward finding a balance between clean, concise code and being detail oriented. I focus mainly on Rails and Node.js for my backend and React.js for my frontend with Postgres as my preferred database. However, I am open to learning and picking up other languages and frameworks as I expand my technical expertise in the ever-changing software field. I also have a modest familiarity with AWS. For more detail about my work and code, please refer to my resume in the footer below.
      </p>
      <hr className='about-hr'/>
      <p className='about-me'>
        I am an avid soccer fan and player, and play pickup games about twice every week. I also played four years in college. I also love geography and occasionally I try to travel or write short stories.
      </p>
      <hr className='about-hr'/>
    </div>
    
  </div>
);

export default SwyInfo;