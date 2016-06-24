import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    login() {
      let { name, password } = this.getProperties('name', 'password');
      this.get('session').authenticate('authenticator:oauth2', name, password)
        .catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
    }
  }
});
