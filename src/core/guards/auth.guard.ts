import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';


@Injectable()
export class AuthGuard implements CanActivate {
constructor(private _JwtService:JwtService){}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>{


    const request = context.switchToHttp().getRequest()
    let {token} = request.headers
    if(!token)
    {
      throw new UnauthorizedException()
    }
    try{
        const payload = await this._JwtService.verify(token,{secret:"nardeen"})
      request['user'] = payload;
      return true;
      }
    catch{
      throw new UnauthorizedException();
    }

    
  }
}
