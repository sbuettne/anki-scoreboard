import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('players');
  this.route('about');
  this.route('matches');
  this.route('results');
  this.route('play');
  this.route('weapons');
});

export default Router;
