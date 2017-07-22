// import React from 'react';
// import GameList from '../stat_data/games';
// import Navigationa from '../navigationa';
// import GameForm from './game_add_form';

// const Games = () => {
//   let games = GameList.map((game) => {
//     return (
//       <li className="game" key={game.id} >
//         <img className="game-img" src={game.image_url} alt="game" />
//         <h3>{game.name}</h3>
//         <p className="game-desc">{game.description}</p>
//       </li>
//     );
//   }); 
  
//   return (
//     <div className="main-content">
//       <header className='loggedhome-header'>
//         <Navigationa />
//       </header>
//       <div className="stuff-out">
//         <h2 className="outside-stuff">Games</h2>
//       </div>
//       <ul className="group">
//         {games}    
//       </ul>
//     </div>
//   );
// }

// export default Games;