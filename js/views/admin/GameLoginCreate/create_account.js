import React from 'react';

export default React.createClass({

  // getStatus() {
  //   let fistName = this.props.fistName;
  //   if (firstName) {
  //     // add code here for input values to only be letter
  //     return;
  //   }

  //   let lastName = this.props.lastName;
  //   if (lasttName) {
  //    // add code here for input values to only be letter
  //     return;
  //   }

  //   let email = this.props.email;
  //   if (email) {
  //     // add code here for email address to have the @ in it
  //     return;
  //   }

  //   let user = this.props.user;
  //   if (user) {
  //    // add code here for minimum username size to be a certain amount
  //     return;
  //   }

  //   let password = this.props.password;
  //   if (password) {
  //     // add code here for password to be case sensitive and with numbers 
  //     return;
  //   }

  //   let repassword = this.props.repassword;
  //   if (password-again) {
  //    // add code here for it to check and be identical with the text that got put in for the password 
  //     return;
  //   }

  //   let goToAdminProfle = this.props.goToAdminProfle;
  //   if (goToAdminProfle) {
  //     // add code her to check the whole form to see if things are all in order with all of the properties 
  //     return;
  //   } 
  // },

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
            <label>Your Password: <input type="text" className="password" onChange={this.updatePassword}/></label>
            <button onClick={this.createAccount}>Create Account</button>
            <button onClick={this.cancelHandler}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }

});

