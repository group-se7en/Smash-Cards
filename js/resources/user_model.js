import Backbone from 'backbone';


export default Backbone.Model.extend({

  urlRoot: 'https://morning-temple-4972.herokuapp.com/signup',

  idAttribute: 'auth_token',



});