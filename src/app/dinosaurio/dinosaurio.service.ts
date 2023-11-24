import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';
import { Dinosaurio } from './dinosaurio';

@Injectable({
  providedIn: 'root'
})
export class DinosaurioService {

  private apiUrl: string = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/main/dinosaurs.json';

  constructor(private http: HttpClient) {}

  getDinos(): Observable<Dinosaurio[]> {
    return this.http
      .get<Dinosaurio[]>(this.apiUrl)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio')))
      );
  }


}
