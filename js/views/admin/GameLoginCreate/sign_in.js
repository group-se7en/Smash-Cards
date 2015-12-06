import React from 'react';

export default React.createClass({

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
      <div className="logInPage">
        <div className="header">
          <h2 className="title"> SmashCard </h2>
        </div>
        <div className="sign-in">
          <h2>Enter Your Login Credentials</h2>
          <form>
            <label>Username: <input id="userName" type="text" className="user" onChange={this.updateUsername}/></label>
            <label>Password: <input id="passWord" type="password" className="password" onChange={this.updatePassword}/></label>
          </form>
            <button onClick={this.signIn}>Sign In</button>
            <button onClick={this.cancelHandler}>Cancel</button>
            <div className="hulk">
             <img src="./img/hulk.gif"/>
            </div> 
        </div>
      </div>
    );
  }

});

