import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Router from './router';
import Collection from './resources/user_collection';
import userModel from './resources/user_model';
let element = document.querySelector('.app');


new Router(element).start();

