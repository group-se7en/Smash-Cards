import React from 'react';

export default React.createClass({

  getInitialState() {
    return {
      card_question: this.props.data.card_question,
      card_answer: this.props.data.card_answer
    };
  }, 

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.card_question, this.state.card_answer);
  },

  cancelClickHandler() {
    this.props.onCancelClick();
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
        <h2>Add Card</h2>
        <input onChange={this.updateQuestion}></input>
        <input onChange={this.updateAnswer}></input>
        <button onClick={this.submitHandler}>Submit</button>
        <button onClick={this.cancelHandler}>Cancel</button>
      </div>
    );
  }

});

