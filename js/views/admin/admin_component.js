import React from 'react';


export default React.createClass({

  adminLogOut() {
    this.props.onLogOut();
  },

  render() {
    return (
      <div className="admin-items">
       <h1>Admin</h1>
       <h3>User Name</h3>
       <button onClick={this.adminLogOut}>Log out</button>
       <p>copyright 2015</p>
      </div>
    
    );
  }

}); 