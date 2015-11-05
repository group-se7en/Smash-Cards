import React from 'react';


export default React.createClass({

  logOut() {
    console.log("logOut");
  },

  render() {
    return (
      <div className="admin">
       <h1>Admin</h1>
       <h3>User Name</h3>
       <button onClick={() => this.logOut()}>Log out</button>
       <p>copyright 2015</p>
      </div>
    
    );
  }

}); 