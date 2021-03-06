import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars(){
    return this.http.get(
      'https://localhost:44312/api/cars/'
    );
  }
}
