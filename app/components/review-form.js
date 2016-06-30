import Ember from 'ember';

export default Ember.Component.extend({
  review: null,
  classNames: ["review-form"],
  actions: {
    submitReview() {
      let review = this.get('review');
      this.sendAction('save', review);
    }
  }
});
