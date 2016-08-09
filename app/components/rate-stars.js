import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ["reviewStar"],
  reviewStar: Ember.computed("score", function() {
    let score = this.get("score");
    let className;
    if (score > 4.8) {
      className = "review-5";
    } else if (score > 4.3) {
      className = "review-4-5";
    } else if (score > 3.8) {
      className = "review-4";
    } else if (score > 3.3) {
      className = "review-3-5";
    } else if (score > 2.8) {
      className = "review-3";
    } else if (score > 1.8) {
      className = "review-2";
    } else if (score > 0.8) {
      className = "review-1";
    } else {
      className = "review-0";
    }
    return className;
  })
});
