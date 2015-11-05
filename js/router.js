import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Play_View from './views/gameplay/play_view';
import Cookies from 'js-cookie';
import $ from 'jquery';
import AddDeck_View from './views/admin/add_deck';
import SignIn from './views/admin/GameLoginCreate/sign_in';

// Routes for page views
let Router = Backbone.Router.extend({
  routes: {
    "login": "home",  
    "user/:id": "selectDeck",
    "user/:id/deck/": "addDeck",
    "user/:id/deck/:id/card": "addCard",
    "user/:id/deck/:id/edit": "edit",
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
    
    render(<AddDeck_View/>, el);
  },

  home(){
    this.render(<SignIn/>, this.el)
      // onSignInClick={}
  
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
    this.render(<Play_View/>, this.el);
  },

  start() {
    Backbone.history.start();
    return this;   //Backbone.history watches the URL chain to see if it changes. start starts it
  }

});

export default Router;
