import React from 'react';
import AdminComponent from './admin_component';

export default React.createClass({

  getInitialState() {
    return {
      question: this.props.data.question,
      answer: this.props.data.answer
    };
  }, 

 logOut(){
   this.props.onLogOut();
 },

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmitClick(this.state.question, this.state.answer);
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
            <h2 className="siteTitle">Edit Cards</h2>
          </div>
          <div className="siteInputWrapper">
            <input className="siteInput" onChange={this.updateQuestion} value={this.state.question}></input>
            <input className="siteInput" onChange={this.updateAnswer} value={this.state.answer}></input>
            </div>
          <div className="sitButtonWrapper"> 
            <button className="siteButton" onClick={this.submitHandler}>Submit</button>
            <button className="siteButton" onClick={this.cancelClickHandler}>Back</button>
          </div>

        </div>
      </div>
    );
  }

});
