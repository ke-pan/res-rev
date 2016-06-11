import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ["rateStar"],
  rateStar: Ember.computed("score", function() {
    let score = this.get("score");
    let className;
    if (score > 4.8) {
      className = "rate-5";
    } else if (score > 4.3) {
      className = "rate-4-5";
    } else if (score > 3.8) {
      className = "rate-4";
    } else if (score > 3.3) {
      className = "rate-3-5";
    } else if (score > 2.8) {
      className = "rate-3";
    } else if (score > 1.8) {
      className = "rate-2";
    } else if (score > 0.8) {
      className = "rate-1";
    } else {
      className = "rate-0";
    }
    return className;
  })
});
