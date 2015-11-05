import React from 'react';
import ReactDom from 'react-dom';
import AdminComponent from './admin_component';


export default React.createClass({
 
 addDeck(){
  console.log('addDeck');
 },

 playDeck(){
  console.log('playDeck');
 },

 editDeck(){
  console.log('editDeck');
 },

 formatData(deck){
  return (
    <div key={deck.id}>
      <div  className="deck" onClick={() => this.playDeck()}>{deck.title}
      </div>
      <button className="play" onClick={() => this.playDeck()}>
      Play </button>
      <button className="edit" onClick={() => this.editDeck()}>Edit Deck</button>    
    </div>
      )
 },

  render() {
    return (
    <div>
      <div className="admin"><AdminComponent/></div>
      <div className="deckList">
        <h2>Select a deck or create a custom one</h2>
        <ul>{this.props.decks.map(this.formatData)}</ul>
        <button onClick={() => this.addDeck()}>Add a deck</button>
      </div>

    </div>
    );
  }

}); 


