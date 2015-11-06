import React from 'react';
import AdminComponent from './admin_component';

export default React.createClass({

  // getInitialState() {
  //   return {
  //     question: this.props.data.card_question,
  //     answer: this.props.data.card_answer
  //   };
  // }, 

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.card_question, this.state.card_answer);
  },

  cancelClickHandler() {
    this.props.onCancelClick();

  },

  addClickHandler(id) {
    this.props.onAddClick(id);


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
        <h2>Edit Cards</h2>
        <input onChange={this.updateQuestion}></input>
        <input onChange={this.updateAnswer}></input>
        <button onClick={this.submitHandler}>Submit</button>
        <button onClick={this.cancelClickHandler}>Cancel</button>
        <button onClick={this.addClickHandler(this.props.data.id)}>Add</button>
      </div>
    );
  }

});

