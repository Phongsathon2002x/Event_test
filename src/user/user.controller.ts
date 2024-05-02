import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { BearerAuthGuard } from 'src/auth/bearer-auth.guard';
import { UsersService } from 'src/user/users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @UseGuards(BearerAuthGuard)
  async getUserProfile(@Request() req) {
    // หากผู้ใช้ผ่านการตรวจสอบ BearerAuthGuard จะดึงข้อมูลผู้ใช้จาก token
    const { username } = req.user;
    // หาข้อมูลผู้ใช้จากฐานข้อมูล
    const user = await this.userService.findOne(username);
    // ส่งข้อมูลผู้ใช้กลับ
    return user;
  }
}
