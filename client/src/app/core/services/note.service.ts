import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteInterface } from '../models/note.model';
import { User } from '../models/user.models';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private httpClient: HttpClient) {}

  public getNotes(): Observable<NoteInterface[]> {
    return (
      this.httpClient.get(`${environment.baseApiURL}/notes`) as Observable<
        NoteInterface[]
      >
    ).pipe(
      map((notes) => {
        return notes.map((note) => ({
          title: note.title,
          description: note.description,
          date: note.date,
        }));
      })
    );
  }

  public getNotesById(id: string): Observable<NoteInterface> {
    return this.httpClient.get(
      `${environment.baseApiURL}/notes/${id}`
    ) as Observable<NoteInterface>;
  }

  public createNote(note: NoteInterface): Observable<NoteInterface> {
    return this.httpClient.post(
      `${environment.baseApiURL}/notes/`,
      note
    ) as Observable<NoteInterface>;
  }

  public editNote(id: string, body: NoteInterface) {
    return this.httpClient.put(
      `${environment.baseApiURL}/notes/${id}`,
      body
    ) as Observable<NoteInterface>;
  }

  public deleteNote(id: string): Observable<NoteInterface> {
    return this.httpClient.delete(
      `${environment.baseApiURL}/notes/${id}`
    ) as Observable<NoteInterface>;
  }
}
