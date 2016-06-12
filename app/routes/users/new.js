import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user');
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      let user = controller.get('model');
      if (user.get('isNew')) {
        user.rollbackAttributes();
      }
    }
  }
});
