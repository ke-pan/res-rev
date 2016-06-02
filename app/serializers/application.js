import RESTSerializer from 'ember-data/serializers/rest';

export default RESTSerializer.extend({
  normalizeArrayResponse(store, model, payload, id, requestType) {
    payload.restaurants = payload.results;
    delete payload.results;
    return this._super(store, model, payload, id, requestType);
  },
  primaryKey: 'objectId'
});
