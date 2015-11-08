import React from 'react';
import AdminComponent from './admin_component';

export default React.createClass({

  logOut(){
    this.props.onLogOut();
  },

  submitHandler(deck) {
    event.preventDefault();
    this.props.onSubmitClick(this.state.card_question, this.state.card_answer, deck);
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
        <div className="admin short">
          <AdminComponent onLogOut={this.logOut} userName={this.props.user}/>
        </div>

        <div className="editWrapper">
          <div className="titleTop">
            <h2 className="siteTitle">Add Card</h2>
          </div>
          <div className="siteInputWrapper">

            <input className="siteInput" placeholder="   Question" onChange={this.updateQuestion}></input>
            <input className="siteInput" placeholder="   Answer" onChange={this.updateAnswer}></input>
          </div>
          <div className="sitButtonWrapper">
            <button className="submitNew siteButton" onClick={this.submitHandler}>Submit</button>
            <button className="siteButton"onClick={this.finishHandler}>Done</button>
          </div>  
        </div>
      </div>
    );
  }

});

