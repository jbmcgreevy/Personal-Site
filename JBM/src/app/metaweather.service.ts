import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MetaweatherService {

  constructor(private http: HttpClient) { }

  getLocation(location){
    return this.http.get(
      'https://www.metaweather.com/api/location/search/?query=' + location
    );
  }

  getWeather(woeid){
    return this.http.get(
        'https://www.metaweather.com/api/location/' + woeid + '/'
    );
  }

  getImage(abb){
    return this.http.get(
      'https://www.metaweather.com/static/img/weather/' + abb + '.svg'
    );
  }
}
