import { Component, OnInit } from '@angular/core';
import { NoteInterface } from 'src/app/core/models/note.model';
import { NoteService } from 'src/app/core/services/note.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.scss']
})
export class EditNotesComponent implements OnInit {

  public note?: NoteInterface;

  constructor(
    private route: ActivatedRoute,
    private NoteService: NoteService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const noteId = params["id"];
      this.NoteService.getNotesById(noteId).subscribe((note) => {
        this.note = note;
        console.log(note)
      })
    })
  }

}
