import { faker } from '@faker-js/faker';

export interface UserData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  street: string;
  postal: string;
  city: string;
  state: string;
  country: string;
  phone: number;
  email: string;
  password: string;
}

export const createUser = ():UserData =>({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  dateOfBirth: '2000-01-02',
  street: 'Geroves',
  postal: '12345',
  city: 'Vilnius',
  state: 'Vilnius',
  country: 'Lithuania',
  phone: 12341234,
  email: faker.internet.exampleEmail(),
  password: 'Labas.123+',
});
