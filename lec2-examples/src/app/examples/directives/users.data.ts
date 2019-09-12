// src/app/examples/ng-for/users.data.ts
import { User } from './user';

export const users: User[] = [
  {
    name: 'Jonhn',
    age: 20,
    address: {
      street: '79 st.',
      city: 'NYC',
      state: 'NY',
      zipCode: 11301
    },
  },
  {
    name: 'Mike',
    age: 50,
    address: {
      street: '80 st.',
      city: 'Orlando',
      state: 'FL',
      zipCode: 1023
    },
    img: 'http://lorempixel.com/200/150/people/2/'
  },
  {
    name: 'suzan',
    age: 35,
    address: {
      street: '56 st.',
      city: 'Bronx',
      state: 'NY',
      zipCode: 12569
    },
    img: 'http://lorempixel.com/200/150/people/1/'
  },

  {
    name: 'Sophia',
    age: 19,
    address: {
      street: '111th st.',
      city: 'Queens',
      state: 'NY',
      zipCode: 12353
    },
    img: 'http://lorempixel.com/200/150/people/6/'
  }
]
