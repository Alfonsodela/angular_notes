import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NoteInterface } from 'src/app/core/models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() public note?: NoteInterface

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
