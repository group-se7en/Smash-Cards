import React from 'react';


export default React.createClass({

  adminLogOut() {
    this.props.onLogOut();
  },

  render() {
    return (
      <div className="admin-items">
         <h1>Admin <i className="fa fa-lock"></i></h1>
         <h3>User Name</h3>
         <button className="logOutBtn" onClick={this.adminLogOut}><p className="buttonTitle">Log out</p><i className="fa fa-sign-out"></i></button>
         <p><i className="fa fa-copyright"></i>copyright 2015</p>
      </div>
    
    );
  }

}); 