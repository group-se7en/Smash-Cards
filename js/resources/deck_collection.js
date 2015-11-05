import Backbone from 'backbone';
import Card from './card_model';
import {APP_URL_Deck} from '../parse_data';

export default Backbone.Collection.extend({

  url: APP_URL_Deck,

  model: Card,

  parse(data) {
    return data.results;
  }
 
});