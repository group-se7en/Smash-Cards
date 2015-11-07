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

 editDeck(id){
  this.props.onEdit(id);
 },

 logOut(){
  this.props.onLogOut();
 },

 formatData(deck){
  return (
    <div key={deck.id} className="deck">
      <div className="deckTitle">{deck.title}
      <p>Deck ID: {deck.id}</p>
      </div>

      <button className="play" onClick={() => this.playDeck(deck.id)}>
      <p className="buttonTitle">Play</p>
      <i className="fa fa-play"></i>
      </button>

      <button className="edit" onClick={() => this.editDeck(deck.id)}><p className="buttonTitle">Edit Deck</p>
      <i className="fa fa-pencil"></i>
      </button>    
    </div>
    );
 },

  render() {
    return (
    <div>
      <div className="admin">
        <AdminComponent onLogOut={this.logOut}/>
      </div>

      <div className="deckList">
        <h1 className="title">SmashCard</h1>
        <h2 className="selectTitle">Select a deck or create a custom one</h2>
        <button className="addDeckBtn" onClick={() => this.addDeck()}><i className="fa fa-plus fa-2x"></i></button>
        <div>{this.props.decks.map(this.formatData)}</div>   
      </div>

    </div>
    );
  }

}); 



