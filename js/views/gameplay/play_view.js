import React from 'react';
import moment from 'moment';
// import data from backend (collection & model)

let Play_View = React.createClass({

  // getInitialState() {

  // },

  // setState() {

  // },

  // timerFunction() {

  // },


  submitAnswer() {

  },

  // checkAnswer() {

  // },

  // scoreFunction() {

  // },


  render() {
    return (
      <div className="wrapper">
        <div className="deckTitle">

        </div>

        <div className="question">

        </div>

        <input type="text" placeholder="Your Answer Here" className="answerField"/>

        <button onClick={this.submitAnswer} className="submit">Submit Answer</button>

        <div className="score">

        </div>

        <div className="timer">

        </div>
      </div>
    );
  }
});

export default Play_View;