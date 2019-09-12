// src/app/examples/ng-for/user.ts
export interface User {
  name: string;
  age: number;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: number;
  }
  img?: string;
}
