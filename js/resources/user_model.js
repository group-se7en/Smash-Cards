import Backbone from 'backbone';


export default Backbone.Model.extend({

  urlRoot: 'https://tiysmashcards.herokuapp.com/signup',

  idAttribute: 'auth_token',



});