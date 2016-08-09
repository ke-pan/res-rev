import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() { return faker.company.companyName(); },
  address() { return faker.address.streetAddress(); },
  description() { return faker.lorem.sentence(); },
  openAt: '8:00 am',
  closeAt: '8:00 pm',
  picUrl: faker.image.food()
});
