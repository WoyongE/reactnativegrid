export interface Address {
  address: string;
  postalCode: string;
  state: string;
}

export interface Company {
  address: Address;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  image: string;
  company: Company;
}

export type UsersState = {
  state: 'loading';
  users: User[];
};
