import { Module } from '@nestjs/common';
import { SigninService } from './signin.service';
import { SigninController } from './signin.controller';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/core/schema/user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[MongooseModule.forFeature([{name:"User", schema: UserSchema }])],
  providers: [ SignupService , SigninService,JwtService],
  controllers: [SigninController, SignupController]
})
export class AuthModule {}
