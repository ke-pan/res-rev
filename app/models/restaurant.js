import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  openAt: DS.attr('date'),
  closeAt: DS.attr('date'),
  picUrl: DS.attr('string')
});
