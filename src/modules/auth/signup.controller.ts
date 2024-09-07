import { Body, Controller, Post } from '@nestjs/common';
import { signupDto } from './dto/auth.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {

constructor(private _SignupService:SignupService){

}

@Post()
signup(@Body() body:signupDto){
return this._SignupService.signup(body)
}
}
