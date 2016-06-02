import Ember from 'ember';
import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
  host: "https://api.leancloud.cn",
  namespace: "1.1/classes",
  headers: {
    "X-LC-Id": "4SOxXkuFjFAR8E6KIkRRx2ss-gzGzoHsz",
    "X-LC-Key": "0WGOggyaYusMqxvq9d5J2I0K"
  },
  pathForType(modelName) {
    var camelized = Ember.String.camelize(modelName);
    return Ember.String.capitalize(camelized);
  }
});
