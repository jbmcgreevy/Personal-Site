import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherStackService {


  constructor(private http: HttpClient) { }

  getLocation(location){
    return this.http.get(
      'https://www.metaweather.com/api/location/search/?query=' + location
    );
  }

  getWeather(location){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=10c3838b716641f1c2e57ef4bd189ed2&query=' + location + '&units=f'
    );
  }

  getImage(abb){
    return this.http.get(
      'https://www.metaweather.com/static/img/weather/' + abb + '.svg'
    );
  }
}
