import { NoteInterface } from './../../core/models/note.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNotes'
})
export class FilterNotesPipe implements PipeTransform {

  transform(notes: NoteInterface[], filterValue: string): NoteInterface[] {
    return notes.filter(value => value.title.toLowerCase().includes(filterValue.toLocaleLowerCase()));
  }
}
