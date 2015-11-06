import React from 'react';
import ReactDom from 'react-dom';
import AdminComponent from './admin_component';


export default React.createClass({

 playDeck(){
  console.log('playDeck');
  this.props.onPlay();

 },
 
 addDeck(){
  console.log('addDeck');
  this.props.onAddDeck();

 },

 editDeck(){
  console.log('editDeck');
  this.props.onEdit();
  
 },
 logOut(){
  console.log('logOut please');
  this.props.onLogOut();

 },

 formatData(deck){
  return (
    <div key={deck.id} className="deck">
      <div onClick={() => this.playDeck()}>{deck.title}
      </div>
      <button className="play" onClick={() => this.playDeck()}>
      Play </button>
      <button className="edit" onClick={() => this.editDeck()}>Edit Deck</button>    
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
        <h2 className="selectTitle">Select a deck or create a custom one</h2>
        <button className="addDeckBtn" onClick={() => this.addDeck()}>Add a deck</button>
        <div>{this.props.decks.map(this.formatData)}</div>
        
      </div>

    </div>
    );
  }

}); 



