import React from 'react';
import moment from 'moment';
// import data from backend (collection & model)

let Play_View = React.createClass({

  getInitialState(event) {
    alert('are you ready?');

    return {
      secondsRemaining: 0,
      question: this.props.questionOne
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
    let correctAnswer = this.props.answer;
    let score = this.refs.score;
    let scoreValue = score.value;
    this.setState({
      secondsRemaining: 1
    })

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
      score.innerHTML= timeNumber*10 + Number(score.innerHTML)
    } else{
      alert ('You are so wrong!');
    }

  },

  nextCard(){
    this.setState({
      secondsRemaining: 10,
      question: this.props.newQuestion
    })
    this.componentWillUnmount();
    clearInterval(this.state);
    this.componentDidMount();
    document.querySelector('.answerField').value = '';

  },
  goHome(){
    this.props.goAway();
  },

  render() {
   
    return (
      <div className="playViewWrapper">
        <div className="deckTitle">
          
        </div>

        <div className="mainPlay">

          <div className="countDownTimerLeft">
            <div>Time Remaining:</div>
            <div className="timeValue">{this.state.secondsRemaining}</div>

          </div>

          <div className="question">
            
            <span>{this.props.question}</span>
          </div>

          <div className="countDownTimerRight">
            <div>Time Remaining: </div>
            <div className="timeValue">{this.state.secondsRemaining}</div>
          </div>
        </div>

        <input type="text" placeholder="Your Answer Here" className="answerField"/>

        <button onClick={this.submitAnswer} className="submitAnswer">Submit Answer</button>
        <button onClick={this.nextCard} className="nextCard">Next Card</button>
        <button onClick={this.goHome}>Go Home</button>
        <div className="scoreDiv">
          Total Score: <span ref='score' className="score">0</span>
        </div>

      </div>
    );
  }
});

export default Play_View;