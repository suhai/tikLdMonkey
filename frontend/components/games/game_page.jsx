import React from 'react';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    this.props.fetchGames();
  };

  render() {
    const game = this.props.game || {};
    const name = game.name || 'NONE';
    const url = game.image_url || 'NO URL';
    const desc = game.description || 'No Description';
    return (
      <main className='user-page'>
        <section className='user-content'>
          <h3>{name} </h3>
          {/* <img src={url} /> */}
          <p>{desc}</p>
        </section>
      </main>
    );
  }
}

export default GamePage;
