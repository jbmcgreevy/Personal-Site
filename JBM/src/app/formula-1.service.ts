import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Formula1Service {

  constructor(private http: HttpClient) { }

  getNextRace(){
    return this.http.get(
      'https://ergast.com/api/f1/current/next.json'
    );
  }
}
