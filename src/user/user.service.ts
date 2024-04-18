import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  index(): string[] {
    return ['User 1', 'User 2', 'User 3'];
  }
}
