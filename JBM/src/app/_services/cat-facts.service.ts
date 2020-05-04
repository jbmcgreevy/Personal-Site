import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  constructor(private http: HttpClient) { }

  getFacts(){
    return this.http.get(
      'https://cat-fact.herokuapp.com/facts'
    );
  }
}
