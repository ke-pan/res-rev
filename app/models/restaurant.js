import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  openAt: DS.attr('string'),
  closeAt: DS.attr('string'),
  picUrl: DS.attr('string'),
  score: DS.attr('number'),
  rates: DS.hasMany('rate')
});
