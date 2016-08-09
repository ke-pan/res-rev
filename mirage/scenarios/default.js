export default function(server) {

  for (var i = 0; i < 12; i++) {
    var restaurant = server.create('restaurant');
    for (var j = 0; j < 10; j++) {
      server.create('review', { restaurant });
    }
  }

}
