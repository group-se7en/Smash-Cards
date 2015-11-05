import React from 'react';

export default React.createClass({

  getStatus() {
    let user = this.props.user;
    if (user) {
      // add code here to check the username in the 
      // back-end and confirm that it is the same 
      // that the user is inputing into the form
      return (
        // input code here that which lets them pass to the admin profile
      );
    },

    let password = this.props.password;
     if (password) {
      // add code here to check the password in the 
      // back-end and confirm that it is the same 
      // that the user is inputing into the form
      return (
        // input code here that which lets them pass to the admin profile
      );
    }

    let goToAdminProfle = this.props.goToAdminProfle;
      if (goToAdminProfle) {
        // add code here to check with the back end if both the 
        // username and password match with what the 
        // user is typing
        return (
          // allow the user to go to the admin profile
        )
      } 
  },

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

