import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

let Router = Backbone.Router.extend({
  routes: {
    "login": "home",  
    "user/:id": "selectDeck",
    "user/:id/deck/": "addDeck",
    "user/:id/deck/:id/card": "addCard",
    "user/:id/deck/:id/edit": "edit",
    "user/:id/deck/:id/play": "play",
    "score": "score",

    },


  goto(route) {
      this.navigate(route, {
      trigger: true
      });
  },

  start: function(){
    Backbone.history.start();   //Backbone.history watches the URL chain to see if it changes. start starts it
  }

});

export default Router;