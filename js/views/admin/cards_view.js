import React from 'react';
import AdminComponent from './admin_component';

export default React.createClass({

  logOut(){
    this.props.onLogOut();
  },

  cancelClickHandler() {
    this.props.onCancelClick();

  },

  addClickHandler() {
    this.props.onAddClick();

  },

  editCard(id, title) {
    this.props.onEditCard(id, title);
  },

  deleteCard(id) {
    this.props.onDeleteCard(id);

  },

  formatData(cards){
  return (
    <div key={cards.id} className="deck">
      <div className="cardsQuestion">{cards.question}
     
      </div>
      <div className="cardsQuestion">{cards.answer}
     
      </div>

      <button className="edit" onClick={() => this.editCard(cards.id)}><p className="buttonTitle">Edit</p>
      <i className="fa fa-pencil"></i>
      </button>    

      <button className="delete" onClick={() => this.deleteCard(cards.id)}><p className="buttonTitle">Delete</p>
      <i className="fa fa-trash"></i>
      </button>  
    </div>
    );
 },

  render() {
    return (
      <div>
        <div className="admin short">
          <AdminComponent onLogOut={this.logOut} userName={this.props.user}/>
        </div>

        <div className="editWrapper">
          <div className="titleTop">
              <h2>List of Cards</h2>
          </div>

          <div className="deckList">                      
            {this.props.cards.map(this.formatData)}
          </div>
          <button onClick={this.cancelClickHandler}>Back</button>
          <button onClick={this.addClickHandler}>Add</button>
        </div>
      </div>
    );
  }

});

