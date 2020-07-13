import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MetaweatherService } from '../_services/metaweather.service';
import { WeatherStackService } from '../_services/weather-stack.service';


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
    private weatherStackService: WeatherStackService,
    ) { }

  ngOnInit(): void {
    this.getFromWeatherStack('homewood');
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
    this.getFromWeatherStack(this.id)
    });
  }

  getFromWeatherStack(woeid) {
    this.weatherStackService
    .getWeather(woeid)
    .subscribe(data => {this.weatherData = data;
    console.log(this.weatherData);

    this.weatherData.current.feelslike = this.convertTemp(this.weatherData.current.feelslike);

    this.imgURL = this.weatherData?.current.weather_icons[0];
    });
  }

  

  convertTemp(temp) {
    return (temp * 9 / 5) + 32;
  }
}
