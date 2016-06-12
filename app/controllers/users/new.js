import Ember from 'ember';

export default Ember.Controller.extend({
  nameValid: Ember.computed('model.name', {
    get() {
      console.log(this.get('model.name'));
      return !Ember.isEmpty(this.get('model.name'));
    }
  }),
  passValid: Ember.computed('model.password', {
    get() {
      console.log(this.get('model.password'));
      return Ember.isPresent(this.get('model.password')) &&
             this.get('model.password').length > 5;
    }
  }),
  actions: {
    save() {
      console.log('save action');
      if (!this.get('nameValid')) {
        console.log('Please input a name');
        this.set('errorMessage', 'Please input a name');
        return false;
      }
      if (!this.get('passValid')) {
        console.log('Password should be at least 6 charactors');
        this.set('errorMessage', 'Password should be at least 6 charactors');
        return false;
      }
      this.get('model').save().then(() => {
        this.transitionToRoute('login')
      })
    }
  }
});
