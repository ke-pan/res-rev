import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeFindAllResponse(store, model, payload, id, requestType) {
    payload.rates = payload.results;
    delete payload.results;
    return this._super(...arguments);
  },
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    let payloadWithKey = {rate: payload};
    return this._super(store, primaryModelClass, payloadWithKey, id, requestType)
  }
});
