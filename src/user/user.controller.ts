import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async index() {
    const data = this.userService.index();
    return {
      message: 'Get users successfully!',
      status: 200,
      data,
    };
  }

  @Get(':id')
  show(@Param('id') id: string) {
    // Logic to fetch user data by ID
    return {
      message: 'Get users successfully!',
      status: 200,
      id,
    };
  }

  @Post()
  store(@Body() payload: CreateUserDto) {
    return {
      message: 'Create user successfully!',
      status: 200,
      payload,
    };
  }
}
