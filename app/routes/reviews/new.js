import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  beforeModel(transition) {
    if (!this.get('session.isAuthenticated')) {
      this.set('session.attemptedTransition', transition);
    }
  },
  model() {
    let restaurant = this.modelFor('restaurants/show');
    let adapterNamespace = this.store.adapterFor('restaurant').get('namespace')
    this.store.adapterFor('review').set('namespace', `${adapterNamespace}/restaurants/${restaurant.id}`);
    return this.store.createRecord('review');
  },
  actions: {
    save() {
      let model = this.modelFor('reviews/new');
      let restaurant = this.modelFor('restaurants/show');
      model.save().then(() => {
        this.transitionTo('reviews', restaurant);
      });
    },
    cancel() {
      this.transitionTo('reviews', restaurant);
    }
  }
});
