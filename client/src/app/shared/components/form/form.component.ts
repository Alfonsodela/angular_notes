import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteInterface } from 'src/app/core/models/note.model';
import { NoteService } from 'src/app/core/services/note.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public note?: NoteInterface;
  public createNoteForm?: FormGroup;

  constructor(
    private NoteService: NoteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createNoteForm = new FormGroup({
      title: new FormControl(this.note?.title || '', Validators.required),
      description: new FormControl(this.note?.description || '', Validators.required),
      date: new FormControl(this.note?.date || '', Validators.required),
    });
  }

  public saveNote(event: Event) {
    event.preventDefault();
    if (this.createNoteForm?.valid) {

      let noteRequest;
      if (this.note?.id) {
        noteRequest = this.NoteService.editNote(this.note.id.toString(), this.createNoteForm.value)
      } else {
        noteRequest = this.NoteService.createNote(this.createNoteForm.value)
      }
      this.NoteService
        .createNote(this.createNoteForm.value)
        noteRequest
        .subscribe(() => {
          this.router.navigate(['/list']);
        });
        this.createNoteForm.reset();
    }
  }

}
