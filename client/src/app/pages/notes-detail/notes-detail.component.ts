import { Component, OnInit } from '@angular/core';
import { NoteInterface } from 'src/app/core/models/note.model';
import { NoteService } from 'src/app/core/services/note.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.scss']
})
export class NotesDetailComponent implements OnInit {

  public notes?: NoteInterface

  constructor(
    private route: ActivatedRoute,
    private NoteService: NoteService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const noteId = params["id"];
      this.NoteService.getNotesById(noteId).subscribe((note) => {
        this.notes = note;
        console.log(this.notes)
      });
    });
  }

}
