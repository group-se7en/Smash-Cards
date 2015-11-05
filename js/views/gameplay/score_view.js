import React from 'react';
import Play_View from './play_view';

let Score_View = React.createClass({

  


  render() {
    return (
      <div className="gameOverWrapper">
        <div className="gameOver">
          Game Over
        </div>

        <div className="finalScore">
          Your score on the Hungarian Cabinet Making deck is ...<br/>

          <p className="scoreNumber">{this.score}</p>
        </div>

        <button onClick={this.playAgain} className="playAgain">Play Again</button>
        <button onClick={this.changeGame} className="changeGame">Play a different Game</button>
        

      </div>
    );
  }
});

export default Score_View;