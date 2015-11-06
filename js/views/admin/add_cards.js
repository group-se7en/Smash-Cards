import React from 'react';
import AdminComponent from './admin_component';

export default React.createClass({

  submitHandler() {
    event.preventDefault();
    this.props.onSubmitClick(this.state.card_question, this.state.card_answer);
  },

  finishHandler() {
    this.props.onFinishClick();
  },

  updateQuestion(event) {
    let newQuestion = event.currentTarget.value;

    this.setState({
      card_question: newQuestion
    });
  },

  updateAnswer(event) {
    let newAnswer = event.currentTarget.value;

    this.setState({
      card_answer: newAnswer
    });
  },

  render() {
    return (
      <div>
        <AdminComponent/>
        <h2>Add Card</h2>
        <input onChange={this.updateQuestion}></input>
        <input onChange={this.updateAnswer}></input>
        <button onClick={this.submitHandler}>Submit</button>
        <button onClick={this.finishHandler}>Done</button>
      </div>
    );
  }

});

