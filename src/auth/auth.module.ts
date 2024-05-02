import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule} from 'src/user/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
// import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule, 
    PassportModule.register({defaultStrategy:'local'}), 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m'},
    }),
  ],
  providers: [AuthService, LocalStrategy ],
  // providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
