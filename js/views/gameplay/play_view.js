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
      <div className="playViewWrapper">


       

        return 
        <div className="deckTitle">
          Deck Title
          <p>Are you any good, <span>{this.props.firstName}</span> <span>{this.props.lastName}</span>?</p>
        </div>

        <div className="mainPlay">
          <div className="countDownTimerLeft">
            Countdown Clock

          </div>
          <div className="question">
            Question Stuffs Here
          </div>
          <div className="countDownTimerRight">
            Countdown Clock
          </div>
        </div>

        <input type="text" placeholder="Your Answer Here" className="answerField"/>

        <button onClick={this.submitAnswer} className="submitAnswer">Submit Answer</button>

        <div className="score">
          Score Value
        </div>

      </div>
    );
  }
});

export default Play_View;