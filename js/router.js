import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Play_View from './views/gameplay/play_view';
import Cookies from 'js-cookie';
import $ from 'jquery';
import AddDeck_View from './views/admin/add_deck';

// Routes for page views
let Router = Backbone.Router.extend({
  routes: {
    "login": "home",  
    "user/:username": "selectDeck",
    "user/:username/decks/": "addDeck",
    "user/:username/decks/:id/cards": "addCard",
    "user/:username/decks/:id/edit": "editCard",
    "play": "play",
    "score": "score",
  },


  initialize(appElement) {
    this.el = appElement;
  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  addDeck() {
    render(<AddDeck_View 
      onSubmitClick={(title) => {
        let newDeck = new DeckModel ({
          Title: title
        });

        newDeck.save().then(() => {
          this.goto('user/:username/decks/:id/cards');
        });
      }}
      onCancelClick={() => goto('user/:id')}/>, el);
  },

  addCard() {
    
    render(<AddDeck_View 
      onSubmitClick={(question, answer) => {
        let newCard = new CardModel ({
          card_question: question,
          card_answer: answer
        });

        newCard.save().then(() => {
          this.goto('user/:username/decks/:id/cards');
        });
      }}
      onFinishClick={() => goto('user/:username')}/>, el);
  },

  editCard(id) {

    let data = this.colletion.get(id);
    
    render(<AddDeck_View 
      data={data.toJSON()}
      onSubmitClick={(question, answer) => this.saveCard(question, answer, id)}
      onCancelClick={() => goto('user/:username')}/>, el);
  },

  saveCard(question, answer, id) {
    this.collection.get(id).save({
      card_question: qustion,
      card_answer: answer
    }).then(() => {
      this.goto('user/:username');
    });
  },

  home(){
    let request = $.ajax({
      url: 'https://morning-temple-4972.herokuapp.com/login',
      method: 'POST',
      data: {
        username: 'brucelee',
        password: 'brucelee'
      }
    });

    $('.app').html('loading...');

    request.then((data) => {
      Cookies.set('user', data);

      $.ajaxSetup({
        headers: {
          auth_token: data.access_token,
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          username: data.username
        }
      });
      this.goto(`user/${data.username}`);
    }).fail(() => {
      $('.app').html('Oops..');
    });
  },

  play() {
    this.render(<Play_View secondsRemaining={10}/>, this.el);
  },

  start() {
    Backbone.history.start();
    return this;   //Backbone.history watches the URL chain to see if it changes. start starts it
  }

});

export default Router;
