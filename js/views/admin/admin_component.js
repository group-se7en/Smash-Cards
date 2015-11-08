import React from 'react';


export default React.createClass({

  adminLogOut() {
    this.props.onLogOut();
  },

  render() {
    return (
      <div className="admin-items">
        <div className="username">
         <h1>{this.props.userName.username}</h1>
        </div>
         <h3>Start Smashing</h3>
         <br/><br/><br/><br/><br/>
        
         <button className="logOutBtn" onClick={this.adminLogOut}><p className="buttonTitle">Log out</p><i className="fa fa-sign-out"></i></button>
         <div className="selectImg editImg addImg"></div>
         <p><i className="fa fa-copyright"></i>copyright 2015</p>
      </div>
    
    );
  }

}); 