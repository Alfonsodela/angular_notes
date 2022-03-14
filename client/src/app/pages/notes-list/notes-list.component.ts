import { NoteInterface } from 'src/app/core/models/note.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  public notes: NoteInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
