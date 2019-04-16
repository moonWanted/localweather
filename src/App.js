import React, { Component } from 'react';
import $ from 'jquery';
import {KEY} from './config.js';
import {SunShower, ThunderStorm, Cloudy, Flurries, Sunny, Rainy} from './Components/WeatherIcons';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        temp: '',
        weather: '',
        icon: ''
      }
  }

  componentDidMount() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log(lat, lon);
          $.ajax({
              url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${KEY}&units=metric`,
              success: (dataJSON) => {
                console.log(dataJSON);
                this.setState({
                    name: dataJSON.name+', '+dataJSON.sys.country,
                    temp: dataJSON.main.temp,
                    weather: dataJSON.weather[0].main
                })
                switch (this.state.weather) {
                    case('Drizzle'):
                      this.setState({
                          icon: Rainy
                      });
                      break;
                    case('Clouds'):
                    this.setState({
                          icon: Cloudy
                      });
                    break;
                    case('Snow'):
                        this.setState({
                            icon: Flurries
                        });
                        break;
                    case('Clear'):
                        this.setState({
                            icon: Sunny
                        });
                        break;
                    case('Thunderstorm'):
                        this.setState({
                            icon: ThunderStorm
                        });
                        break;
                    case('Rain'):
                        this.setState({
                            icon: SunShower
                        });
                        break;
                }
              }
          })
      })
    } else {
      console.log('Geolocation is not supported');
    }
  }

  render() {
    return (
      <div className="App">
          <h1>LOCALWEATHER</h1>
          <p id = 'location'>{this.state.name}</p>
          <p id = 'temp'> {this.state.temp}°C</p>
          <p id = 'weather'>{this.state.weather}</p>
           {this.state.icon}
      </div>
    );
  }
}

export default App;
