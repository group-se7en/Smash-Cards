import React from 'react';
import scoreValue from './play_view';
import deckTitle from './play_view';

let Score_View = React.createClass({

  
//newgame
//play again
getInitialState() {
    alert ("Thanks for playing!  Click OK to get your score")
      return {
      question: "Game Over"
    };
  },

  

  playclickHandler() {
    this.props.onPlayClick();
  },

  newclickHandler() {
    this.props.onNewClick();
  },

  addclickHandler() {
    this.props.onAddClick();
  },

  homeclickHandler() {
    this.props.onHomeClick();
  },

  

  render() {
    return (
      <div className="gameOverWrapper">
        <div className="gameOver">
          Game Over
        </div>

        <div className="score">
          Your score on the {this.deckTitle} deck is ...<br/>

          <p className="scoreNumber">{this.scoreValue}</p>
        </div>

        <div className="after">
          <button className="play" onClick={this.playclickHandler}>Play Again</button>
          <button className="new" onClick={this.newclickHandler}>Play a New Game</button>
          <button className="add" onClick={this.addclickHandler}>Add Your Own Game</button>
          <button className="home" onClick={this.homeclickHandler}>Home Page</button>

        </div>

      </div>
    );
  }
});

export default Score_View;