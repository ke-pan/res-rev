import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  comment() { return faker.lorem.sentence(); },
  reviewerName() { return faker.name.firstName(); },
  score() { return faker.random.number(5); }
});
