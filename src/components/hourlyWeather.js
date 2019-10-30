import React from "react";

const HourlyWeather = (props) => {

  let myIcon;
  props.myicon >= 10 ? myIcon = "https://developer.accuweather.com/sites/default/files/" + props.myicon + "-s.png" : myIcon = "https://developer.accuweather.com/sites/default/files/0" + props.myicon + "-s.png" ;

  const date = props.data.DateTime.slice(0,10);
  const time = props.data.DateTime.slice(11,16);
  return (

      <div className={props.className}>
        <p>{date}</p>
        <p>{time}</p>
        <img src={myIcon} alt="icon"/>
        <p>{props.data.IconPhrase}</p>
        <p>{props.data.Temperature.Value}° {props.data.Temperature.Unit}</p>
      </div>

    );
}

export default HourlyWeather;
