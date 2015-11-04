import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Router from './router';

let element = document.querySelector('.app');

new Router(element).start();