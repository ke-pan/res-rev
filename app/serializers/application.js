import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  primaryKey: 'objectId',
  normalizeFindAllResponse(store, model, payload, id, requestType) {
    return this._super(store, model, payload.results, id, requestType);
  }
});
