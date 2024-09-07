import { Body, Controller, Post } from '@nestjs/common';
import { signinDto } from './dto/auth.dto';
import { SigninService } from './signin.service';

@Controller('signin')
export class SigninController {
    constructor(private _SigninService:SigninService){
    }
    @Post()
    signin(@Body() body: signinDto){
        return this._SigninService.signin(body)
    }


}
