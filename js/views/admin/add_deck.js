import React from 'react';
import AdminComponent from './admin_component';

export default React.createClass({

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmitClick(this.state.title);
  },

  cancelClickHandler() {
    this.props.onCancelClick();
  },

  logOut(){
  this.props.onLogOut();
 },

  updateTitle(event) {
    let newTitle = event.currentTarget.value;

    this.setState({
      title: newTitle
    });
  },

  render() {
    return (
      <div className="addDeckPage">
        <AdminComponent onLogOut={this.logOut} userName={this.props.user}/>
        <h2>Create a deck!</h2>
        <input onChange={this.updateTitle}></input>
        <button onClick={this.submitHandler}>Submit</button>
        <button onClick={this.cancelClickHandler}>Cancel</button>
      </div>
    );
  }

});

