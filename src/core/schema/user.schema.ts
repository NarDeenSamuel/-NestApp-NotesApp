import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';

@Schema({timestamps:true,versionKey:false})
export class User {
    @Prop({required:true})
    name:string;
    @Prop({required:true})
    email:string;
    @Prop({required:true})
    password:string;


}
export const UserSchema = SchemaFactory.createForClass(User)