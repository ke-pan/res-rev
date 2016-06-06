import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  extractRelationships(modelClass, resourceHash) {
    let relastionShips = {};
    modelClass.eachRelationship((key, relastionshipMeta) => {
      
    })
  }
});
