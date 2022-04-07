import { NoteService } from 'src/app/core/services/note.service';
import { NoteInterface } from 'src/app/core/models/note.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  public notes: NoteInterface[] = [];
  public filterValue: string = '';
  
  constructor(private NoteService: NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  public getNotes() {
    this.NoteService.getNotes().subscribe((notes) => {
      this.notes = notes;
      console.log(this.notes)
    });
  }
}
