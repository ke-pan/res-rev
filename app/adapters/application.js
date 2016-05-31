import EmberParseAdapter from 'ember-parse-adapter';

export default EmberParseAdapter.extend({
  host: 'https://api.leancloud.cn',
  namespace: '1.1',
  init: function(){
    this._super();

    this.set( 'headers', {
      'X-LC-Id' : Ember.get( this, 'applicationId' ),
      'X-LC-Key'   : Ember.get( this, 'restApiId' )
    });
  },
});
