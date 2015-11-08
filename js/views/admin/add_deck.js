import React from 'react';
import AdminComponent from './admin_component';

export default React.createClass({

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmitClick(this.state.title);
  },

  cancelClickHandler() {
    this.props.onCancelClick();
  },

  logOut(){
  this.props.onLogOut();
 },

  updateTitle(event) {
    let newTitle = event.currentTarget.value;

    this.setState({
      title: newTitle
    });
  },

  render() {
    return (
      <div className="addDeckPage">
       <div className="admin short">
        <AdminComponent  onLogOut={this.logOut} userName={this.props.user}/>
       </div>

       <div className="editWrapper">
        <h2 className="siteTitle">Create a deck!</h2>
        <div className="siteInputWrapper">
         <input placeholder="   Deck Name" className="siteInput" onChange={this.updateTitle}>
         </input>
        </div>
        <div className="sitButtonWrapper">
          <button className="siteButton" onClick={this.submitHandler}>Submit</button>
          <button className="siteButton" onClick={this.cancelClickHandler}>Cancel
          </button>
        </div>
       </div>
      </div>
    );
  }

});

