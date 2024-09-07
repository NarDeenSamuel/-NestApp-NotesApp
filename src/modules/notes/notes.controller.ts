import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { NotesService } from './notes.service';
import { addNotesDto, paramNoteDto, updateNoteDto } from './dto/notes.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('notes')
@UseGuards(AuthGuard)
export class NotesController {
    constructor(private _NotesService: NotesService) { }

    @Post()
    addNote(@Body() body: addNotesDto,@Req() req:any) {
        body.User=req.user.userId
        return this._NotesService.addNote(body)
    }

    @Get()
    getAllNote(@Req() req:any) {
        return this._NotesService.getAllNotes(req)
    }


    @Delete('/:id')
    deleteNote(@Param() param: paramNoteDto) {
        return this._NotesService.deleteNote(param.id)
    }


    @Put('/:id')
    updateNote(@Param() param: paramNoteDto, @Body() body: updateNoteDto) {
        return this._NotesService.updateNote(body, param.id)
    }




}
