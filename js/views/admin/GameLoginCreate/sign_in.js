import React from 'react';

export default React.createClass({

  getStatus() {

    let user = this.props.user;
    if (user) {
      // add code here to check the username in the 
      // back-end and confirm that it is the same 
      // that the user is inputing into the form
      return;
    }

    let password = this.props.password;
     if (password) {
      // add code here to check the password in the 
      // back-end and confirm that it is the same 
      // that the user is inputing into the form
      return;
    }

    let goToAdminProfle = this.props.goToAdminProfle;
      if (goToAdminProfle) {
        // add code here to check with the back end if both the 
        // username and password match with what the 
        // user is typing
        return;
      } 

     
  // request(){ 
  //     let newName= document.querySelector('.userName').value;
  //     let newPassword =document.querySelector('.passWord').value;

  //     $.ajax({
  //     url: 'https://morning-temple-4972.herokuapp.com/login',
  //     method: 'POST',
  //     data: {
  //       username: newName,
  //       password: newPassword
  //     }
  //   });

  //   $('.app').html('loading...');

  //   request.then((data) => {
  //     Cookies.set('user', data);

  //     $.ajaxSetup({
  //       headers: {
  //         auth_token: data.access_token,
  //         firstname: data.firstname,
  //         lastname: data.lastname,
  //         email: data.email,
  //         username: data.username
  //       }
  //     });
  //     this.goto(`user/${data.username}`);
  //   }).fail(() => {
  //     $('.app').html('Oops..');
  //   });
  //   }
  // },

  },

   updateUsername(event) {
    let newName = event.currentTarget.value;
    
    this.setState({
      username: newName
    });
  },

  updatePassword(event) {
    let newPass = event.currentTarget.value;

    this.setState({
      password: newPass
    });
  },
  

  signIn(event) {
    event.preventDefault();
    this.props.onSignInClick(this.state.username, this.state.password);
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
          <h2>Enter Your Login Credentials</h2>
          <form>
            <label>Your Username: <input id="userName" type="text" className="user" onChange={this.updateUsername}/></label>
            <label>Your Password: <input id="passWord" type="text" className="password" onChange={this.updatePassword}/></label>
            <button onClick={this.signIn}>Sign In</button>
            <button onClick={this.cancelHandler}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }

});

