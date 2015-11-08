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
import Cards_View from './views/admin/cards_view';

// Routes for page views
let Router = Backbone.Router.extend({
  routes: {
    "" : "redirectToWelcome",
    "welcome": "welcome",
    "login": "signIn",  
    "register": "createAccount",  
    "user/:username": "selectDeck",
    "user/:username/decks": "addDeck",
    "user/:username/decks/:id/:title" : "cards",
    "user/:username/cards/:id/edit": "editCard",
    "user/:username/decks/:id/:title/add": "addCard",
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

  cards(un, deckid, title) {
    let user = Cookies.getJSON('user');
    console.log(un, deckid, title);
    let request = $.ajax({
      url: `https://morning-temple-4972.herokuapp.com/decks/${deckid}/cards`,
      method: 'GET',
      headers: {
        auth_token: user.auth_token
      },
    
    });
    request.then((data) => {
      Cookies.set('thisdeck', {id: deckid, title: title});

      let cards = data;

    this.render(<Cards_View
      user={user}
      cards={cards}
      onAddClick={() => this.goto(`user/${user.username}/decks/${deckid}/${title}/add`)}
      onLogOut={() => this.removeCookies()}
      onCancelClick={() => this.goto(`user/${user.username}`)}
      onEditCard={(id) => this.goto(`user/${user.username}/cards/${id}/edit`)}
      />, this.el);

  });

  },

  addDeck() {
    let data = Cookies.getJSON('user');

 
    this.render(<AddDeck_View 
      onLogOut={() => this.removeCookies()}
      user={data}
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

  addCard(un, id, title) {   
    
    let data = Cookies.getJSON('user');
    

    this.render(<AddCard_View 
      user={data}
      onLogOut={() => this.removeCookies()}
      onSubmitClick={(question, answer) => this.newCard(question, answer, id, title)}
      onFinishClick={() => this.goto(`user/${data.username}`)}/>, this.el);
  },

  newCard(question, answer, id, title) {
    let user = Cookies.getJSON('user');

    let request = $.ajax({
      url: `https://morning-temple-4972.herokuapp.com/decks/${id}/cards`,
      method: 'POST',
      headers: {
        auth_token: user.auth_token
      },
      data: {
        question: question,
        answer: answer
      }
    });

    request.then((data) => {

      $.ajaxSetup({
        headers: {
          id: data.id,
          question: data.question,
          answer: data.answer
          
        } 

      });
      document.location.reload(true);
      // this.goto(`user/${user.username}/decks/${id}/${title}/add`);
    }).fail(() => {
      $('.app').html('Oops..');
    });

  },

  editCard(un, id) {
    let userData = Cookies.getJSON('user');
    console.log(un, id);
    let thisdeck = Cookies.getJSON('thisdeck');

    let request = $.ajax({
      url: `https://morning-temple-4972.herokuapp.com/cards/${id}`,
      method: 'GET',
      headers: {
        auth_token: userData.auth_token
      }
    
    });
    
    request.then((data) => {
      $.ajaxSetup({
        headers: {
          id: data.id,
          question: data.question,
          answer: data.answer
        } 
      })

      let card = data;
      console.log(card);
      this.render(<EditCard_View 
          data={card}
          user={userData}
          onLogOut={() => this.removeCookies()}
          addCard={card.id}
          onSubmitClick={(question, answer) => this.saveCard(question, answer, id)}
          onCancelClick={() => this.goto(`user/${userData.username}/decks/${thisdeck.id}/${thisdeck.title}`)}
          />, this.el);
    });
  },

  saveCard(question, answer, cardId) {
    let user = Cookies.getJSON('user');
    console.log(question, answer, cardId);
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

  console.log(userData);

  let request = $.ajax({
      url: 'https://morning-temple-4972.herokuapp.com/decks',
      method: 'GET',
      headers: {
        auth_token: userData.auth_token
      },
    
    });
    request.then((data) => {

      let decks = data;
      
  this.render(
    <SelectDeck
      user={userData}
      decks={decks}
      onLogOut={() => this.removeCookies()}
      onDeleteDeck={(id) => this.deleteDeck(id)}
      onPlay={(x) => this.goto(`user/${userData.username}/play/${x}`)}
      onAddDeck={() => this.goto(`user/${userData.username}/decks`)}
      onShowCards={(id, title) => this.goto(`user/${userData.username}/decks/${id}/${title}`)}
      />,

    );
  });
  
  },

  deleteDeck(id) {
    let user = Cookies.getJSON('user');

    let request = $.ajax({
      url: `https://morning-temple-4972.herokuapp.com/decks/${id}`,
      method: 'DELETE',
      headers: {
        auth_token: user.auth_token,
      },
    });
    $('.app').html('loading...');

    request.then((data) => {
      this.goto(`user/${user.username}`)
    }); 
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

    let x = Cookies.getJSON('user')

     let request = $.ajax({
      url: `https://morning-temple-4972.herokuapp.com/decks/${id}/cards`,
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

     $.ajaxSetup({
        headers: {
          auth_token: data.auth_token,
          id: data.id,
          question: data.question,
          answer: data.answer
        }
      
      });
     console.log(data);
     let card = _.last(data);
     let cardDeck= data;
     
      ReactDom.render(<Play_View secondsRemaining={10} 
          question={card.question}
          answer={card.answer}
          goAway={()=>this.goto('')}/>, document.querySelector('.app'));

     $('.nextCard').on('click', function(){
          console.log(cardDeck)
          cardDeck.pop()
          let card =_.last(cardDeck);
          if (!card) {
              alert('out of cards');
              this.goto('score')
            }
            ReactDom.render(<Play_View secondsRemaining={10} 
          question={card.question}
          answer={card.answer}
          goAway={()=>this.goto('')}/>, document.querySelector('.app'));
        })
          
     }); 
        
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