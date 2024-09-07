import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notes } from 'src/core/schema/notes.schema';

@Injectable()
export class NotesService {
 

    constructor(@InjectModel(Notes.name) private NotesModel : Model <Notes>){}


    addNote= async(note:any)=>{

        this.NotesModel.insertMany(note)
        return{message:"success"}
    }
    getAllNotes= async(req: any)=>{

        let notes = await this.NotesModel.find({User:req.user.userId})
        return{message:"success",notes}
    }

    deleteNote= async(id:any)=>{

        let note = await this.NotesModel.findByIdAndDelete(id)
        return{message:"success",note}
    }

    updateNote= async(note:any,id:any)=>{

        let updatedNote = await this.NotesModel.findByIdAndUpdate(id,note)
        return{message:"success",updatedNote}
    }


}
