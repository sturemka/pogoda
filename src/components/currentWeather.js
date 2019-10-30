import React from "react";
import HeaderSmall from './header-small';

const CurrentWeather = (props) => {

  return (
    <div className="row">
      <div className="col-sm align-self-center first-in-current">
        <HeaderSmall className="App-header-small" text="Obecnie:"/>
      </div>
      <div className="col-sm align-self-center">
        <img src={props.myiconlink} alt="icon"/>
        <p>{props.data.WeatherText}</p>
      </div>
      <div className="col-sm align-self-center">
        <h1>{props.data.Temperature.Metric.Value}° {props.data.Temperature.Metric.Unit}</h1>
      </div>
    </div>
    );
}

export default CurrentWeather;
