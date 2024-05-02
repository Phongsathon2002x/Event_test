import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class BearerAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // เรียกใช้ canActivate จาก AuthGuard และทำการตรวจสอบ token ที่ส่งมา
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // ตรวจสอบผู้ใช้และ token
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    // ส่งข้อมูลผู้ใช้กลับ
    return user;
  }
}
