import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(
    @Body() userData: { email: string; password: string; name?: string },
  ) {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.findUserById(id);
  }
}
