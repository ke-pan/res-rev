import RESTSerializer from 'ember-data/serializers/rest';

export default RESTSerializer.extend({
  normalizeArrayResponse(store, model, payload, id, requestType) {
    console.log(payload);
    return this._super(store, model, payload.results, id, requestType);
  }
});
