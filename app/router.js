import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('restaurants', { path: '/' }, function() {
    this.route('show', { path: 'restaurants/:id'}, function() {
      this.route('rates', { resetNamespace: true }, function() {});
    });
  });
  this.route('users');
});

export default Router;
