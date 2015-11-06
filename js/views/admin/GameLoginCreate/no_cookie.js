import React from 'react';
import SignIn from './sign_in';
import CreateAccount from './create_account';

export default React.createClass({

  SignIn() {
    console.log('You got me signed in');
  this.props.onSignInClick();
  },

  CreateAccount() {
    console.log('You a newbie to the tribe');
  this.props.onCreactAccountClick();
  },

  render() {
    return (
      <div> 
        <div className="header">
          <h2> Welcome to Flashcard Game </h2>
        </div>
        <div className="welcome">
          <form>
            <button onClick={this.SignIn}>Sign In</button>
            <button onClick={this.CreateAccount}>Create Account</button>
          </form>
        </div>
      </div>
 
    );
  }

});

