import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['starOrder'],
  starOrder: Ember.computed('star', function() {
    let star = this.get('star');
    return 'star' + star
  })
});
