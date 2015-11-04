import Backbone from 'backbone';
import {APP_URL_Deck} from '../parse_data';

export default Backbone.Model.extend({

  urlRoot: APP_URL_Deck,

  idAttribute: 'objectId',



});