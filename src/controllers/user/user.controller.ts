import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { userDto } from 'src/dto/userDto.dto';
import { UserService } from 'src/services/user/user.service';

ApiTags('User');
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() body: userDto) {
    return this.userService.CreateUser(body.name, body.telephone, body.address);
  }
}
