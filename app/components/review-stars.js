import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["review-stars"],
  classNameBindings: ["reviewStar"],
  reviewStar: Ember.computed("score", function() {
    let score = this.get("score");
    let className;
    if (score > 4.8) {
      className = "star-5";
    } else if (score > 4.3) {
      className = "star-4-5";
    } else if (score > 3.8) {
      className = "star-4";
    } else if (score > 3.3) {
      className = "star-3-5";
    } else if (score > 2.8) {
      className = "star-3";
    } else if (score > 1.8) {
      className = "star-2";
    } else if (score > 0.8) {
      className = "star-1";
    } else {
      className = "star-0";
    }
    return className;
  })
});
