import React from 'react';

let Score_View = React.createClass({

  
//newgame
//play again
getInitialState() {
    return {
      gameOver: "Game Over"
    };
  },

  ticking() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  },

  componentDidMount() {
    this.setState({ secondsRemaining: this.props.secondsRemaining });
    this.interval = setInterval(this.ticking, 1000);
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  // submitAnswer() {

  // },

  // checkAnswer() {

  // },

  // scoreFunction() {

  // },

  render() {
    return (
      <div className="gameOverWrapper">
        <div className="gameOver">
          Game Over
        </div>

        <div className="score">
          Your score on the Hungarian Cabinet Making deck is ...<br/>

          <p className="scoreNumber">75</p>
        </div>

        <button onClick={this.playclickHandler} className="playAgain">Play Again</button>
        <button onClick={this.newGameclickHandler} className="changeGame">Play a different Game</button>
        

      </div>
    );
  }
});

export default Score_View;