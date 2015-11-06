import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Play_View from './views/gameplay/play_view';
import Cookies from 'js-cookie';
import $ from 'jquery';
import SelectDeck from './views/admin/select_deck';
import AddDeck_View from './views/admin/add_deck';
import _ from 'underscore';
import Score_View from './views/gameplay/score_view';
import AddCard_View from './views/admin/add_cards';
import EditCard_View from './views/admin/edit_cards';
import SignIn from './views/admin/GameLoginCreate/sign_in';
import CreateAccount from './views/admin/GameLoginCreate/create_account';
import UserAccount from './resources/user_model';
import NoCookie from './views/admin/GameLoginCreate/no_cookie';

// Routes for page views
let Router = Backbone.Router.extend({
  routes: {
    "" : "home",
    "welcome": "start",
    "login": "signIn",  
    "register": "createAccount",  
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

  redirectToLogin() {

    let userLogged = Cookies.getJSON('user');

    if (userLogged != undefined) {
      this.navigate(`user/${userLogged.username}`, {
        replace: true,
        trigger: true
      });
    } else {
      this.navigate('welcome', {
        replace: true,
        trigger: true
      });
    }


  },

  addDeck() {
    render(<AddDeck_View 
      onSubmitClick={(title) => {
        let newDeck = new DeckModel ({
          title: title
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

  saveCard(question, answer, username) {
    this.collection.get(id).save({
      card_question: qustion,
      card_answer: answer
    }).then(() => {
      this.goto('user/:username');
    });
  },

  home(){
    this.render(<NoCookie/>, this.el)
    // onSignInClick={(username, password) => this.logIn(username, password)}
  },

  logIn(username, password) {
    let userLogged = Cookies.getJSON('user');
    console.log(userLogged);

    let request = $.ajax({
      url: 'https://morning-temple-4972.herokuapp.com/login',
      method: 'POST',
      data: {
        username: username,
        password: password
      }
    });
    
    $('.app').html('loading...');

    request.then((data) => {
      Cookies.set('user', data, { expires: 7 });

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

  createAccount(){
    this.render(<CreateAccount 
      onSubmitClick={(first, last, email, user, password) => this.newUser(first, last, email, user, password)}
      onCancelClick={() => this.goto('login')}/>, this.el);
  },

  newUser(first, last, email, user, password) {
    let request = $.ajax({
      url: 'https://morning-temple-4972.herokuapp.com/signup',
      method: 'POST',
      data: {
        firstname: first,
        lastname: last,
        email: email,
        username: user,
        password: password
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
      this.goto('login');
    }).fail(() => {
      $('.app').html('Oops..');
    });
  },

  selectDeck(){

    let data = [
    {
      title  :"Magic",
       id    :1
    },
     {
      title  :"Math",
       id    :2
    },
     {
      title  :"History",
       id    :3
    },

    {
      title   : "Japanese", 
      id      :4
    }
 ];

  this.render(
    <SelectDeck
      decks={data}
      onLogOut={() => this.removeCookies()}
      onPlay={() => this.goto(`user/${data.username}`)}
      onAdd={() => this.goto(`user/${data.username}`)}
      onEdit={() => this.goto(`user/${data.username}`)}/>,
    );
  
  },

  removeCookies(event) {
    
    Cookies.remove('user');
    let ajaxNull = $.ajaxSetup({
      headers: {
        auth_token: null
      }
    });

    this.goto('login');
  },
 

  play() {

    let request = $.ajax({
      url: 'https://morning-temple-4972.herokuapp.com/decks',
      method: 'GET',
      headers: {
        auth_token: 'a50111d48c38dda4355f0f640870ebce',
      }
    });

    $('.app').html('loading...');

    request.then((data) => {
      Cookies.set('user', data);

      $.ajaxSetup({
        headers: {
         
          id: data.id,
          title: data.title,
          user_id: data.user_id
        }
      });

      _.each(data, function(y){
        ReactDom.render(<Play_View secondsRemaining={10} deckTitle={y.title}/>, document.querySelector('.app'));
      })
      
    }) 


  },

  score() {
    this.render(
      <Score_View
      onplayclick={() => this.goto('play')}
      onnewGameclick={() => this.goto("user/:username")}/>,);
  },

  start() {
    Backbone.history.start();
    return this;   //Backbone.history watches the URL chain to see if it changes. start starts it
  }

});

export default Router;