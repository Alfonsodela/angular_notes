import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteInterface } from '../models/note.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private httpClient: HttpClient) {}
  
  public getProducts(): Observable<NoteInterface[]> {
    return this.httpClient.get(`${environment.baseApiURL}products`) as Observable<
      NoteInterface[]
    >;
  }
  
  
}
