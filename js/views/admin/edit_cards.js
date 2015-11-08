import React from 'react';
import AdminComponent from './admin_component';

export default React.createClass({

  // getInitialState() {
  //   return {
  //     question: this.props.data.question,
  //     answer: this.props.data.answer
  //   };
  // }, 
 logOut(){
   this.props.onLogOut();
 },

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.question, this.state.answer);
  },

  cancelClickHandler() {
    this.props.onCancelClick();

  },

  addClickHandler() {
    this.props.onAddClick();

  },

  updateQuestion(event) {
    let newQuestion = event.currentTarget.value;
    
    this.setState({
      question: newQuestion
    });
  },


  updateAnswer(event) {
    let newAnswer = event.currentTarget.value;

    this.setState({
      answer: newAnswer
    });
  },

  render() {
    return (
      <div>
        <div className="admin short">
          <AdminComponent onLogOut={this.logOut} userName={this.props.user}/>
        </div>
        <div className="editWrapper">
        <div className="titleTop">
          <h2>Edit Cards</h2>
        </div>
          <input onChange={this.updateQuestion}></input>
          <input onChange={this.updateAnswer}></input>
          <button onClick={this.submitHandler}>Submit</button>
          <button onClick={this.cancelClickHandler}>Cancel</button>
          <button onClick={this.addClickHandler}>Add</button>
        </div>
      </div>
    );
  }

});
