import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  index(): any {
    return this.users;
  }

  async findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
