import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // let restaurant = this.modelFor("restaurants/show");
    return this.modelFor("restaurants/show").get('rates');
    // return this.store.findAll('rate', {
    //   "where": {
    //     "restaurant": {
    //       "__type": "Pointer",
    //       "className": "Restaurant",
    //       "objectId": restaurant.id
    //     }
    //   }
    // });
  }
});
