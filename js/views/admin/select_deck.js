import React from 'react';
import ReactDom from 'react-dom';
import AdminComponent from './admin_component';


export default React.createClass({

  playDeck(id){
    this.props.onPlay(id);
  },
 
  addDeck(){
    this.props.onAddDeck();
  }, 

  showCards(id, title){
    this.props.onShowCards(id, title);
  }, 

  deleteDeck(id) {
    this.props.onDeleteDeck(id);
  },

  editDeck(id, title){
    this.props.onEdit(id, title);
  
  },
 
  logOut(){
    this.props.onLogOut();
  },

 formatData(deck){
  return (
    <div key={deck.id} className="deck">
      <div className="deckTitle">{deck.title}
     
      </div>

      <button className="play" onClick={() => this.playDeck(deck.id)}>
      <p className="buttonTitle">Play</p>
      <i className="fa fa-play"></i>
      </button>    

      <button className="delete" onClick={() => this.deleteDeck(deck.id)}><p className="buttonTitle">Delete</p>
      <i className="fa fa-trash"></i>
      </button>  

      <button className="cards" onClick={() => this.showCards(deck.id, deck.title)}><p className="buttonTitle">Cards</p>
      <i className="fa fa-arrow-right"></i>
      </button> 
    </div>
    );
 },

  render() {
    return (
    <div>
      <div className="admin">
        <AdminComponent onLogOut={this.logOut} userName={this.props.user}/>
      </div>

      <div className="deckList">
        <h1 className="title">SmashCard</h1>
        <h2 className="selectTitle">Select a deck or create a custom one  --------
        <i className="fa fa-arrow-right"></i>
        <button className="addDeckBtn" onClick={() => this.addDeck()}><i className="fa fa-plus fa-2x"></i></button>
        </h2>
        <div>{this.props.decks.map(this.formatData)}</div>   
      </div>

    </div>
    );
  }

}); 



