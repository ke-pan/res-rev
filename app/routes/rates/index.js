import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor("restaurants/show").get('rates');
  },
  setupController(controller, model) {
    model.reload();
    controller.set('model', model);
  }
});
