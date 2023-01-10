import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

export class Weather {
  date!: Date
  summary!: string
  temperatureC!: number
  temperatureF!: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Client';

  list: Weather[] = []


  constructor(
    private weatherService: WeatherService
  ) {

  }


  getData() {
    this.weatherService.getData().subscribe(result => {
      this.list = result
    })
  }
}
