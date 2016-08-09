import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr('string'),
  score: DS.attr('number'),
  restaurant: DS.belongsTo('restaurant'),
  reviewerName: DS.attr('string')
});
