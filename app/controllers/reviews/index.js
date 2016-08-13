import Ember from 'ember';

export default Ember.Controller.extend({
  reviewerName: "Mr. Who",
  score: 3,
  comment: "It's awesome",
  nameValid: Ember.computed('reviewerName', function(){
    return !Ember.isBlank(this.get("reviewerName"));
  }),
  scoreValid: Ember.computed('score', function(){
    let score = this.get("score");
    return 1 <= score && score <= 5;
  }),
  commentValid: Ember.computed('comment', function(){
    return !Ember.isBlank(this.get("comment"));
  }),
  actions: {
    createReview() {
      if (this.get('scoreValid') && this.get('nameValid') && this.get('commentValid')) {
        let newReview = this.store.createRecord('review', {
          reviewerName: this.get('reviewerName'),
          score: this.get('score'),
          comment: this.get('comment'),
          restaurant: this.get("restaurant"),
          reviewDate: new Date()
        });
        newReview.save();
        // .then(function() {
        //   this.get('reviews').pushObject(newReview);
        // });
      }
    }
  }
});
