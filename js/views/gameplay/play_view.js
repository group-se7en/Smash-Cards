import React from 'react';
import moment from 'moment';
// import data from backend (collection & model)

let Play_View = React.createClass({

  getInitialState() {
    return {
      secondsRemaining: 0
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
      <div className="playViewWrapper">
        <div className="deckTitle">
          Deck Title
        </div>

        <div className="mainPlay">

          <div className="countDownTimerLeft">
            <div>Time Remaining:</div>
            <div className="timeValue">{this.state.secondsRemaining}</div>
          </div>

          <div className="question">
            Question Stuffs Here
          </div>

          <div className="countDownTimerRight">
            <div>Time Remaining: </div>
            <div className="timeValue">{this.state.secondsRemaining}</div>
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