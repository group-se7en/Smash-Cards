import React from 'react';

export default React.createClass({

  getStatus() {
    let fistName = this.props.fistName;
    if (firstName) {
      // add code here for input values to only be letter
      return (
        // input code here for it to be stored in the back-end side 
      );
    },

    let lastName = this.props.lastName;
    if (lasttName) {
     // add code here for input values to only be letter
      return (
        // input code here to be stored in the back-end side
      );
    },

    let email = this.props.email;
    if (email) {
      // add code here for email address to have the @ in it
      return (
        // input code here to be stored in the back-end side
      );
    },

    let user = this.props.user;
    if (user) {
     // add code here for minimum username size to be a certain amount
      return (
        // input code here to be stored in the back-end side
      );
    },

    let password = this.props.password;
    if (password) {
      // add code here for password to be case sensitive and with numbers 
      return (
        // add code here to allow the user to pass to the password-again text space 
      );
    },

    let password-again = this.props.password-again;
    if (password-again) {
     // add code here for it to check and be identical with the text that got put in for the password 
      return (
        // input code here for it to be stored in the back-end side
      );
    }

    let goToAdminProfle = this.props.goToAdminProfle;
    if (goToAdminProfle) {
      // add code her to check the whole form to see if things are all in order with all of the properties 
      return (
        // allow the user to go to the admin profile
      )
    } 
  },

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

