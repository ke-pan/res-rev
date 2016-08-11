import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  comment() { return faker.lorem.paragraph(); },
  reviewerName() { return faker.name.firstName(); },
  score() { return faker.random.number({min:2, max:5}); },
  reviewDate() { return faker.date.recent(); }
});
