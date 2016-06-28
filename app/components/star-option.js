import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['star'],
  classNameBindings: ['starOrder'],
  starOrder: Ember.computed('star', function() {
    let star = this.get('star');
    return 'star' + star;
  }),
  click() {
    this.get('clickStar')(this.get('starOrder'));
  },
  mouseEnter() {
    this.get('mouseInStar')(this.get('starOrder'));
  },
  mouseLeave() {
    this.get('mouseOutStar')();
  }
});
