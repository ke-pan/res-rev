import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
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
