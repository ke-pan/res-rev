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
    this.store.adapterFor('rate').set('namespace', `${adapterNamespace}/restaurants/${restaurant.id}`);
    return this.store.createRecord('rate');
  },
  actions: {
    save() {
      let model = this.modelFor('rates/new');
      let restaurant = this.modelFor('restaurants/show');
      model.save().then(() => {
        this.transitionTo('rates', restaurant);
      });
    },
    cancel() {
      this.transitionTo('rates', restaurant);
    }
  }
});
