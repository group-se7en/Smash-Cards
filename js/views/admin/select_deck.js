import React from 'react';
import ReactDom from 'react-dom';
import AdminComponent from './admin_component';


export default React.createClass({

 playDeck(id){
  console.log('playDeck');
  this.props.onPlay(id);

 },
 
 addDeck(){
  console.log('addDeck');
  this.props.onAddDeck();

 }, 

 editDeck(id){
  console.log('editDeckCOMP:', id);
  this.props.onEdit(id);
  
 },
 logOut(){
  console.log('logOut please');
  this.props.onLogOut();

 },

 formatData(deck){
  return (
    <div key={deck.id} className="deck">
      <div className="deckTitle">{deck.title}
      <p>{deck.id}</p>
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
       
         <h2 className="selectTitle">Select a deck or create a custom one      <i className="fa fa-hand-pointer-o"></i></h2>
     
        <button className="addDeckBtn" onClick={() => this.addDeck()}><i className="fa fa-plus fa-2x"></i></button>
        <div>{this.props.decks.map(this.formatData)}</div>
        
      </div>

    </div>
    );
  }

}); 



