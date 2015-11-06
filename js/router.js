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
    "" : "redirectToWelcome",
    "welcome": "welcome",
    "login": "signIn",  
    "register": "createAccount",  
    "user/:username": "selectDeck",
    "user/:username/decks": "addDeck",
    "user/:username/decks/:id/edit": "editCard",
    "user/:username/decks/:id/add": "addCard",
    "user/:username/play/:id": "play",
    "score": "score"
  },


  initialize(appElement) {
    this.el = appElement;
    let router = this;
    // this.on('route', console.log.bind(console))

  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  redirectToWelcome() {

    let userLogged = Cookies.getJSON('user');
    console.log(userLogged);

    if (userLogged) {

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

  welcome(){
    this.render(<NoCookie
      onSignInClick={() => this.goto('login')}
      onCreateAccountClick={() => this.goto('register')}/>, this.el)
  },

  addDeck() {
    let data = Cookies.getJSON('user');


    this.render(<AddDeck_View 
      onSubmitClick={(title) => this.newDeck(title)}
      onCancelClick={() => this.goto(`user/${data.username}`)}/>, this.el);

  },

  newDeck(title) {
    let user = Cookies.getJSON('user');

    let request = $.ajax({
      url: 'https://morning-temple-4972.herokuapp.com/decks',
      method: 'POST',
      headers: {
        auth_token: user.auth_token
      },
      data: {
        title: title
      }
    });
    
    $('.app').html('loading...');

    request.then((data) => {

      $.ajaxSetup({
        headers: {
          id: data.id,
          title: data.title          
        } 

      });
      this.goto(`user/${user.username}`);
    }).fail(() => {
      $('.app').html('Oops..');
    });
  },

  addCard() {    
    let data = Cookies.getJSON('user');

    this.render(<AddCard_View 
      onSubmitClick={(question, answer) => this.newCard(question, answer)}
      onFinishClick={() => this.goto(`user/${data.username}`)}/>, this.el);
  },

  newCard(question, answer) {
    let user = Cookies.getJSON('user');
    
    let request = $.ajax({
      url: `https://morning-temple-4972.herokuapp.com/decks/${deck.id}`,
      method: 'POST',
      headers: {
        auth_token: user.auth_token
      },
      data: {
        question: question,
        answer: answer
      }
    });

    $('.app').html('loading...');

    Cookies.set('card', data);

    request.then((data) => {
     
      $.ajaxSetup({
        headers: {
          id: data.id,
          question: data.question,
          answer: data.answer
          
        } 

      });

      this.goto(`user/${user.username}/decks/${data.id}/cards`);
    }).fail(() => {
      $('.app').html('Oops..');
    });

  },

  editCard(un, id) {
    let userData = Cookies.getJSON('user');

    let request = $.ajax({
      url: `https://morning-temple-4972.herokuapp.com/decks/${id}`,
      method: 'GET',
      headers: {
        auth_token: userData.auth_token
      },
    
    });
    request.then((data) => {
      let deck = data;
      this.render(<EditCard_View 
          data={deck}
          onSubmitClick={(question, answer) => this.saveCard(question, answer)}
          onCancelClick={() => this.goto(`user/${userData.username}`)}
          onAddClick={(did) => this.goto(`user/${userData.username}/decks/${did}/add`)}/>, this.el);
    });
    

    
  },

  saveCard(question, answer) {
    let request = $.ajax({
      url: `https://morning-temple-4972.herokuapp.com/cards/${cardId}`,
      method: 'PUT',
      headers: {
        auth_token: user.auth_token
      },
      data: {
        question: question,
        answer: answer
      }
    });
    
    $('.app').html('loading...');

    request.then((data) => {
     
      $.ajaxSetup({
        headers: {
          id: data.id,
          question: data.question,
          answer: data.answer
          
        } 

      });

      this.goto(`user/${user.username}`);
    }).fail(() => {
      $('.app').html('Oops..');
    });

  },


  signIn(){
    this.render(<SignIn
      onSignInClick={(username, password) => this.logIn(username, password)}
      onCancelClick={() => this.goto('welcome')}/>, this.el);

  },

  logIn(username, password) {

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
      onCancelClick={() => this.goto('welcome')}/>, this.el);
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

  let userData = Cookies.getJSON('user');
  // this.removeCookies();

  console.log(userData);

  let request = $.ajax({
      url: 'https://morning-temple-4972.herokuapp.com/decks',
      method: 'GET',
      headers: {
        auth_token: userData.auth_token
      },
    
    });
    request.then((data) => {

      // // console.log(data);
      let decks = data;
      // console.log("decks:", decks);
      

  this.render(
    <SelectDeck
      decks={decks}
      onLogOut={() => this.removeCookies()}
      onPlay={(id) => this.goto(`user/${userData.username}/play/${id}`)}
      onAddDeck={() => this.goto(`user/${userData.username}/decks`)}
      onEdit={(id) => this.goto(`user/${userData.username}/decks/${id}/edit`)}/>,

    );
  });//fetch
  
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

 

  play(username, id) {
    console.log(username, id);

    let x = Cookies.getJSON('user')
   

     let request = $.ajax({
      url: 'https://morning-temple-4972.herokuapp.com/decks/2/cards',
      method: 'GET',
      headers: {
        auth_token: x.auth_token,
      },
      data: {
        title: x.title
      }
    });
    $('.app').html('loading...');

      request.then((data) => {
        // Cookies.set('user', data, {expires: 7});

     $.ajaxSetup({
        headers: {
          auth_token: data.auth_token,
          id: data.id,
          question: data.question,
          answer: data.answer
        }
      
      });
     
     let card = _.last(x);
      ReactDom.render(<Play_View secondsRemaining={10} 
          questionOne={card.question}
          onNextCardClick={()=>{
            x.pop();
            let card =_.last(x);
            if (!card) {
              alert('out of cards');
              this.goto('score')}}}
          newQuestion={card.question}
          answer={card.answer}/>, document.querySelector('.app'));

     // $('.nextCard').on('click', function(){
          
     //      }
     //      ReactDom.render(<Play_View secondsRemaining={10} 
     //      getQuestion={card.question}
     //      answer={card.answer}/>, document.querySelector('.app'));
     //    })
     // $('.submitAnswer').on('click', function(){
            
     // });
    }) 
        
        

  },
        

        

  score() {
    this.render(
      <Score_View

      onPlayClick={() => this.goto("user/:username/play/:id")}
      onNewClick={() => this.goto("user/:username")}
      onAddClick={() => this.goto("user/:username/decks")}
      onHomeClick={() => this.goto("welcome")}/>
      );

  },

  start() {
    Backbone.history.start();
    return this;   //Backbone.history watches the URL chain to see if it changes. start starts it
  }

});

export default Router;