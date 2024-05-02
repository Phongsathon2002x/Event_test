import { Injectable } from '@nestjs/common';


export type User = any;


@Injectable()
export class UsersService {
 private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: '1',
        username: 'admin',
        password: 'admin123',
      },
      {
        id: '2',
        username: 'ton',
        password: '123456',
      },
      {
        id: '3',
        username: 'phongsathon',
        password: '654321',
      },
      {
        id: '4',
        username: 'test',
        password: 'test123',
      }
    ]
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
  async findByUsername(username: string) {

  }
}



