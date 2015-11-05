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
    "user/:id": "selectDeck",
    "user/:id/deck/": "addDeck",
    "user/:id/deck/:id/card": "addCard",
    "user/:id/deck/:id/edit": "editCard",
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
          this.goto('user/:id/deck/:id/card');
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
          this.goto('user/:id/deck/:id/card');
        });
      }}
      onFinishClick={() => goto('user/:id')}/>, el);
  },

  editCard(id) {

    let data = this.colletion.get(id);
    
    render(<AddDeck_View 
      data={data.toJSON()}
      onSubmitClick={(question, answer) => this.saveCard(question, answer, id)}
      onCancelClick={() => goto('user/:id')}/>, el);
  },

  saveCard(question, answer, id) {
    this.collection.get(id).save({
      card_question: qustion,
      card_answer: answer
    }).then(() => {
      this.goto('user/:id');
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

    // let request = $.ajax({
    //   url: 'https://morning-temple-4972.herokuapp.com/decks',
    //   method: 'POST',
    //   data: {
    //     auth_token: 'a50111d48c38dda4355f0f640870ebce',
    //   }
    // });

    // $('.app').html('loading...');

    // request.then((data) => {
    //   Cookies.set('user', data);

    //   $.ajaxSetup({
    //     headers: {
          // Auth-Token: '29384792384'
    //       id: data.id,
    //       title: data.title
    //     }
    //   });
      this.render(<Play_View secondsRemaining={10}/>, this.el);
    // })
 
    


  },

  start() {
    Backbone.history.start();
    return this;   //Backbone.history watches the URL chain to see if it changes. start starts it
  }

});

export default Router;
