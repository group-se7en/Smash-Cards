import React from 'react';
import moment from 'moment';
// import data from backend (collection & model)

let Play_View = React.createClass({

  getInitialState(event) {
    alert('are you ready?');
    return {
      secondsRemaining: 0,
      question: 'stringy string'
    };
  },

  ticking() {
    this.setState({
      secondsRemaining: this.state.secondsRemaining - 1}
      );
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

  submitAnswer() {
    let time = this.state.secondsRemaining;
    let timeNumber = Number(time);
    let userAnswer = document.querySelector('.answerField').value;
    let correctAnswer = 'something';
    let score = document.querySelector('.score');
    this.setState({
      secondsRemaining: 1
    })
    if (userAnswer === 'taco'){
      score.innerHTML= timeNumber*10 + Number(score.innerHTML)
    } else{
      alert ('wrong');
    }
  },

  nextCard(){
    alert('are you ready?');
    this.setState({
      secondsRemaining: 10,
      question: 'you is so dumb'
    })
    this.componentDidMount();
  },

  

  render() {
   
    return (
      <div className="playViewWrapper">
        <div className="deckTitle">
          <span>{this.props.deckTitle}</span>
        </div>

        <div className="mainPlay">

          <div className="countDownTimerLeft">
            <div>Time Remaining:</div>
            <div className="timeValue">{this.state.secondsRemaining}</div>

          </div>

          <div className="question">
            {this.state.question}
          </div>

          <div className="countDownTimerRight">
            <div>Time Remaining: </div>
            <div className="timeValue">{this.state.secondsRemaining}</div>
          </div>
        </div>

        <input type="text" placeholder="Your Answer Here" className="answerField"/>

        <button onClick={this.submitAnswer} className="submitAnswer">Submit Answer</button>
        <button onClick={this.nextCard} className="nextCard">Next Card</button>
        <div className="scoreDiv">
          Score Value: <span className="score">0</span>
        </div>

      </div>
    );
  }
});

export default Play_View;