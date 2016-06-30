import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  beforeModel(transition) {
    if (!this.get('session.isAuthenticated')) {
      this.set('session.attemptedTransition', transition);
    }
  },
  model() {
    return this.store.createRecord('rate', {
      restaurant: this.modelFor('restaurants/show')
    });
  },
  actions: {
    save(rate) {
      rate.save().then(() => {
        this.transitionTo('rates');
      });
    },
    cancel() {
      this.transitionTo('rates');
    }
  }
});
