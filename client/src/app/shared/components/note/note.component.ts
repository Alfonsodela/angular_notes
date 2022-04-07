import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NoteInterface } from 'src/app/core/models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
 
  @Input() public note?: NoteInterface
  @Input() public enableProductEdit: boolean = false;
  @Output() public onDeleteNote = new EventEmitter<string>();


  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.note?.id)
    
  }

  public editNote() {
    this.router.navigate(['/edit-note', this.note?.id]);
  }

  public deleteNote() {
    if (this.note) {
      this.onDeleteNote.emit(this.note.id);
    }
  }
 
}
