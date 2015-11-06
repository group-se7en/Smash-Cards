import React from 'react';

export default React.createClass({

  updateFirst(event) {
    let newFirst = event.currentTarget.value;

    this.setState({
      firstname: newFirst
    });
  },
  updateLast(event) {
    let newLast = event.currentTarget.value;

    this.setState({
      lastname: newLast
    });
  },
  updateEmail(event) {
    let newEmail = event.currentTarget.value;

    this.setState({
      email: newEmail
    });
  },
  updateUsername(event) {
    let newUser = event.currentTarget.value;

    this.setState({
      username: newUser
    });
  },
  updatePassword(event) {
    let newPass = event.currentTarget.value;

    this.setState({
      password: newPass
    });
  },

  createAccount(event) {
    event.preventDefault();
    console.log('account was made')
    this.props.onSubmitClick(
      this.state.firstname, 
      this.state.lastname, 
      this.state.email, 
      this.state.username, 
      this.state.password
      );
  },

  cancelHandler() {
    this.props.onCancelClick();
  },


  render() {
    return (
      <div>
        <div className="header">
          <h2> Welcome to Flashcard Game </h2>
        </div>
        <div className="sign-in">
          <h2>Create an Account</h2>
          <form>
            <label>Your First Name: <input type="text" className="firstName" onChange={this.updateFirst}/></label>
            <label>Your Last Name: <input type="text" className="lastName" onChange={this.updateLast}/></label>
            <label>Your Email: <input type="text" className="email" onChange={this.updateEmail}/></label>
            <label>Your Username: <input type="text" className="user" onChange={this.updateUsername}/></label>
            <label>Your Password: <input type="password" className="password" onChange={this.updatePassword}/></label>
            <button onClick={this.createAccount}>Create Account</button>
            <button onClick={this.cancelHandler}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }

});

