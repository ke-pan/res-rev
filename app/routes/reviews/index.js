import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor("restaurants/show").get('reviews');
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('restaurant', this.modelFor("restaurants/show"));
  }
});
