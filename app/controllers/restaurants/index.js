import Ember from 'ember';

export default Ember.Controller.extend({
  filter: '',
  restaurants: Ember.computed('model', 'filter', function() {
    let filter = this.get('filter').toLowerCase();
    let restaurants = this.get('model').toArray();
    if (!Ember.isBlank(filter)) {
      restaurants = restaurants.filter(function(restaurant) {
        return restaurant.get('name').toLowerCase().indexOf(filter) !== -1;
      });
    }
    return restaurants;
  }),
  actions: {
    setFilter(filter) {
      this.set('filter', filter);
    }
  }
});
