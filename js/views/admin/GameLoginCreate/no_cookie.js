import React from 'react';

export default React.createClass({


  signIn (event) {
    console.log("hallo");
    this.props.onSignInClick();
  },

  createAccount (event) {
    console.log("Bom Dia");
    this.props.onCreateAccountClick();

  },


  render() {
    return (
      <div className="welcomeScreen"> 

        <div className="banner header">
          <div className="bannerBackdrop">
           </div>
            <div className="postionText">
              <h2 className="title"> SmashCard </h2>
              <h3 className="tagLine"> Improve Your Memory. Smash Your Opponents </h3>
             </div> 
         
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

