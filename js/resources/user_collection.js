import Backbone from 'backbone';
import User from './user_model';
import {APP_URL_User} from '../parse_data';

export default Backbone.Collection.extend({

  url: APP_URL_User,

  model: User,

  // parse: function(data) {
  //   return data.results;
  // },

  parse(data) {
    return data.results;
  }
 
});