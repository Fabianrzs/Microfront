import { Component } from '@angular/core';
import { WeatherService, WeatherForecast } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: false,
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  weatherData: WeatherForecast[] = [];

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit() {
    this.loadWeatherData();
  }

  loadWeatherData() {
    this.weatherService.getWeather().subscribe({
      next: (data) => this.weatherData = data,
      error: (err) => console.error("Error al cargar el clima:", err)
    });
  }
}
