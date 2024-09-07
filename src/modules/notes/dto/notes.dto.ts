import { Optional } from '@nestjs/common';
import { User } from './../../../core/schema/user.schema';
import { IsEmail, IsMongoId, IsOptional, IsStrongPassword, MaxLength, MinLength } from "class-validator";


export class addNotesDto {

    @MaxLength(20)
    @MinLength(2)
    title:string;
    @MaxLength(300)
    @MinLength(10)
    descreption:string;
    @IsMongoId()
    @IsOptional()
    User:string;


} 


export class paramNoteDto {
    @IsMongoId()
    id:string;

} 


export class updateNoteDto {
    @MaxLength(20)
    @MinLength(2)
    @IsOptional()
    title:string;
    @MaxLength(300)
    @MinLength(10)
    @IsOptional()
    descreption:string;
    @IsOptional()
    @IsMongoId()
    id:string;

} 