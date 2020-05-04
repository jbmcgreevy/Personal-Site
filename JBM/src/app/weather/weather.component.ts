import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MetaweatherService } from '../_services/metaweather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public locationData: any;
  public id: any;
  public fahrenheitTemp: any;
  public imgURL: any;

  constructor(
    private formBuilder: FormBuilder,
    private metaWeatherService: MetaweatherService,
    ) { }

  ngOnInit(): void {
    this.getFromMetaWeather(2364559);
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
    this.imgURL = 'https://www.metaweather.com/static/img/weather/c.svg';
  }

  sendToMetaWeather(formValues) {
    this.metaWeatherService
    .getLocation(formValues.location)
    .subscribe(data => {this.locationData = data;
    this.id = this.locationData[0].woeid;
    console.log(this.id);
    this.getFromMetaWeather(this.id)
    });
  }

  getFromMetaWeather(woeid) {
    this.metaWeatherService
    .getWeather(woeid)
    .subscribe(data => {this.weatherData = data;
    console.log(this.weatherData);

    this.weatherData.consolidated_weather[0].the_temp = this.convertTemp(this.weatherData?.consolidated_weather[0].the_temp);
    this.weatherData.consolidated_weather[0].min_temp = this.convertTemp(this.weatherData?.consolidated_weather[0].min_temp);
    this.weatherData.consolidated_weather[0].max_temp = this.convertTemp(this.weatherData?.consolidated_weather[0].max_temp);

    this.imgURL = 'https://www.metaweather.com/static/img/weather/' + 
      (this.weatherData?.consolidated_weather[0].weather_state_abbr) + '.svg';
    });
  }

  

  convertTemp(temp) {
    return (temp * 9 / 5) + 32;
  }
}
