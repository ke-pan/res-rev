import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  description: DS.attr('string'),
  openAt: DS.attr('string'),
  closeAt: DS.attr('string'),
  picUrl: DS.attr('string'),
  reviews: DS.hasMany('reviews')
});
