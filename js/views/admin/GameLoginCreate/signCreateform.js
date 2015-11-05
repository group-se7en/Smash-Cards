import React from 'react';

export default React.createClass({

  createAccount() {
    console.log('You a newbie to the tribe');
  this.props.onCreactAccountClick();
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
            <label>Your First Name: <input type="text" className="firstName"/></label>
            <label>Your Last Name: <input type="text" className="lastName"/></label>
            <label>Your Email: <input type="text" className="email"/></label>
            <label>Your Username: <input type="text" className="user"/></label>
            <label>Your Password: <input type="text" className="password"/></label>
            <label>Re-Enter Your Password: <input type="text" className="password-again"/></label>
            <button onClick={this.createAccount}>Create Account</button>
          </form>
        </div>
      </div>
    );
  }

});

