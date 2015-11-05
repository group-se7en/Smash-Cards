import React from 'react';

export default React.createClass({

  submitHandler() {
    event.preventDefault();
    this.props.onSubmitClick(this.state.deck_title);
  },

  cancelClickHandler() {
    this.props.onCancelClick();
  },

  updateTitle(event) {
    let newTitle = event.currentTarget.value;

    this.setState({
      deck_title: newTitle
    });
  },

  render() {
    return (
      <div>
        <AdminComponent/>
        <h2>Create a deck!</h2>
        <input onChange={this.updateTitle}></input>
        <button onClick={this.submitHandler}>Submit</button>
        <button onClick={this.cancelClickHandler}>Cancel</button>
      </div>
    );
  }

});

