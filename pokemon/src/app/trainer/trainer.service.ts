import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from './Trainer';
import { environment } from '../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.apiUrl + 'trainers.json')
  }

  getBook(id: string): Observable<Trainer> {
    return this.http.get<Trainer>(this.apiUrl + id + '/trainers.json');
  }

}

