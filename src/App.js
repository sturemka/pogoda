import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header';
import HeaderSmall from './components/header-small';
import CurrentWeather from './components/currentWeather';
import HourlyWeather from './components/hourlyWeather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curDate : null,
      curTime : null,
      curData : [{"WeatherText":"Bezchmurnie","WeatherIcon":33,"Temperature":{"Metric":{"Value":7,"Unit":"C","UnitType":17}}}],
      myIconLink : "https://developer.accuweather.com/sites/default/files/01-s.png",
      hourlyData : [{"DateTime":"2019-10-30T12:00:00+01:00","EpochDateTime":1572433200,"WeatherIcon":1,"IconPhrase":"Słonecznie","HasPrecipitation":false,"IsDaylight":true,"Temperature":{"Value":7.3,"Unit":"C","UnitType":17},"PrecipitationProbability":0,"MobileLink":"http://m.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=12&unit=c","Link":"http://www.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=12&unit=c"},{"DateTime":"2019-10-30T13:00:00+01:00","EpochDateTime":1572436800,"WeatherIcon":1,"IconPhrase":"Słonecznie","HasPrecipitation":false,"IsDaylight":true,"Temperature":{"Value":8.0,"Unit":"C","UnitType":17},"PrecipitationProbability":0,"MobileLink":"http://m.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=13&unit=c","Link":"http://www.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=13&unit=c"},{"DateTime":"2019-10-30T14:00:00+01:00","EpochDateTime":1572440400,"WeatherIcon":2,"IconPhrase":"Przeważnie słonecznie","HasPrecipitation":false,"IsDaylight":true,"Temperature":{"Value":8.6,"Unit":"C","UnitType":17},"PrecipitationProbability":0,"MobileLink":"http://m.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=14&unit=c","Link":"http://www.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=14&unit=c"},{"DateTime":"2019-10-30T15:00:00+01:00","EpochDateTime":1572444000,"WeatherIcon":3,"IconPhrase":"Częściowo słonecznie","HasPrecipitation":false,"IsDaylight":true,"Temperature":{"Value":7.6,"Unit":"C","UnitType":17},"PrecipitationProbability":0,"MobileLink":"http://m.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=15&unit=c","Link":"http://www.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=15&unit=c"},{"DateTime":"2019-10-30T16:00:00+01:00","EpochDateTime":1572447600,"WeatherIcon":3,"IconPhrase":"Częściowo słonecznie","HasPrecipitation":false,"IsDaylight":true,"Temperature":{"Value":6.5,"Unit":"C","UnitType":17},"PrecipitationProbability":0,"MobileLink":"http://m.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=16&unit=c","Link":"http://www.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=16&unit=c"},{"DateTime":"2019-10-30T17:00:00+01:00","EpochDateTime":1572451200,"WeatherIcon":35,"IconPhrase":"Zachmurzenie umiarkowane","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":5.2,"Unit":"C","UnitType":17},"PrecipitationProbability":0,"MobileLink":"http://m.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=17&unit=c","Link":"http://www.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=17&unit=c"},{"DateTime":"2019-10-30T18:00:00+01:00","EpochDateTime":1572454800,"WeatherIcon":36,"IconPhrase":"Przejściowe zachmurzenia","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":4.0,"Unit":"C","UnitType":17},"PrecipitationProbability":0,"MobileLink":"http://m.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=18&unit=c","Link":"http://www.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=18&unit=c"},{"DateTime":"2019-10-30T19:00:00+01:00","EpochDateTime":1572458400,"WeatherIcon":36,"IconPhrase":"Przejściowe zachmurzenia","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":3.5,"Unit":"C","UnitType":17},"PrecipitationProbability":0,"MobileLink":"http://m.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=19&unit=c","Link":"http://www.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=19&unit=c"},{"DateTime":"2019-10-30T20:00:00+01:00","EpochDateTime":1572462000,"WeatherIcon":36,"IconPhrase":"Przejściowe zachmurzenia","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":3.0,"Unit":"C","UnitType":17},"PrecipitationProbability":0,"MobileLink":"http://m.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=20&unit=c","Link":"http://www.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=20&unit=c"},{"DateTime":"2019-10-30T21:00:00+01:00","EpochDateTime":1572465600,"WeatherIcon":36,"IconPhrase":"Przejściowe zachmurzenia","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":2.8,"Unit":"C","UnitType":17},"PrecipitationProbability":0,"MobileLink":"http://m.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=21&unit=c","Link":"http://www.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=21&unit=c"},{"DateTime":"2019-10-30T22:00:00+01:00","EpochDateTime":1572469200,"WeatherIcon":36,"IconPhrase":"Przejściowe zachmurzenia","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":2.5,"Unit":"C","UnitType":17},"PrecipitationProbability":0,"MobileLink":"http://m.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=22&unit=c","Link":"http://www.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=22&unit=c"},{"DateTime":"2019-10-30T23:00:00+01:00","EpochDateTime":1572472800,"WeatherIcon":36,"IconPhrase":"Przejściowe zachmurzenia","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":1.9,"Unit":"C","UnitType":17},"PrecipitationProbability":0,"MobileLink":"http://m.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=23&unit=c","Link":"http://www.accuweather.com/pl/pl/warsaw/274663/hourly-weather-forecast/274663?day=1&hbhhour=23&unit=c"}]
    };
  }

  componentDidMount() {
      this.setState({
        curDate : new Date().toLocaleString('pl-PL', {"dateStyle" : "long"})
      });
  }

  render () {
    return (
    <div className="App">
      <Header className="App-header" text="Pogoda w Warszawie"/>
      <h2>{this.state.curDate} {this.state.curTime}</h2>

      <div className="container current">
        <CurrentWeather myiconlink={this.state.myIconLink} data={this.state.curData[0]}/>

      </div>

      <div className="container">
        <HeaderSmall className="App-header-small" text="Najbliższe 12 godzin:"/>
        <div className="scrollable">
          {this.state.hourlyData.map((data, i) => {
            return (<HourlyWeather className="cards" key={i} myicon={data.WeatherIcon} data={data} />)
          })}
        </div>
      </div>


    </div>
  );
  }
}

export default App;
