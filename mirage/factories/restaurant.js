import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.company.companyName(),
  address: faker.address.streetAddress(),
  description: faker.lorem.sentence(),
  openAt: '8:00 am',
  closeAt: '8:00 pm',
  picUrl: faker.image.food()
});
