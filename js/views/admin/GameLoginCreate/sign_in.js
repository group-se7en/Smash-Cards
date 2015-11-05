import React from 'react';

export default React.createClass({

  signIn() {
    console.log('You got me signed in');
  this.props.onSignInClick();
  },

  render() {
    return (
      <div>
        <div className="header">
          <h2> Welcome to Flashcard Game </h2>
        </div>
        <div className="sign-in">
          <h2>Enter Your Login Credentials</h2>
          <form>
            <label>Your Username: <input type="text" className="user"/></label>
            <label>Your Password: <input type="text" className="password"/></label>
            <button onClick={this.signIn}>Sign In</button>
          </form>
        </div>
      </div>
    );
  }

});

