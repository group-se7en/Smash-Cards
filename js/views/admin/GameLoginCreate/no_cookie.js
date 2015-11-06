import React from 'react';

export default React.createClass({


  signIn (event) {
    event.preventDefault();
    console.log("hallo");
    this.props.onSignInClick();
  },

  createAccount (event) {
    event.preventDefault();
    console.log("Bom Dia");
    this.props.onCreateAccountClick();

  },


  render() {
    console.dir(this.props);
    return (
      <div> 
        <div className="header">
          <h2> Welcome to Flashcard Game </h2>
        </div>
        <div className="welcome">
          <form>
            <button onClick={this.signIn}>Sign In</button>
            <button onClick={this.createAccount}>Create Account</button>
          </form>
        </div>
      </div>
 
    );
  }

});

