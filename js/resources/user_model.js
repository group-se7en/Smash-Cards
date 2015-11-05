import Backbone from 'backbone';
import {APP_URL_User} from '../parse_data';

export default Backbone.Model.extend({

  urlRoot: APP_URL_User,

  idAttribute: 'objectId',



});