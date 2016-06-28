import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['star-selection'],
  lastStar: 'star1',
  actions: {
    commitActiveStar(star) {
      this.$('.star').removeClass('active-star');
      this.$('.' + star).addClass('active-star');
      this.set('lastStar', star);
    },
    changeActiveStar(star) {
      this.$('.star').removeClass('active-star');
      this.$('.' + star).addClass('active-star');
    },
    rollbackActiveStar() {
      this.$('.star').removeClass('active-star');
      this.$('.' + this.get('lastStar')).addClass('active-star');
    }
  }
});
