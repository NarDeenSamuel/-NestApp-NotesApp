import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({timestamps:true,versionKey:false})
export class Notes {
    @Prop({required:true})
    title:string;
    @Prop({required:true})
    descreption:string;
    @Prop({required:true,type:mongoose.Schema.Types.ObjectId,ref:"User"})
    User:string;


}
export const NotesSchema = SchemaFactory.createForClass(Notes)