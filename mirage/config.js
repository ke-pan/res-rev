export default function() {
  this.namespace = 'api';

  this.get('/restaurants');
  this.get('/restaurants/:id');
  this.get('/reviews');
  this.post('/reviews');
  this.get('/reviews/:id');
}
