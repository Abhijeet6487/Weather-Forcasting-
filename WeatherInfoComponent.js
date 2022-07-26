import React from "react";
import styled from "styled-components";
import {WeatherIcons} from "../App";
export const WeatherInfoIcons = {
    Sunrise:"/icon/Sun-1.svg",
    Sunset:"/icon/sunset.svg",
  Humidity: "/icon/humid.svg",
     Wind: "/icon/wind.svg",
    Pressure: "/icon/pressure.webp",
};

const WeatherCondition=styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
justify-content: space-beetween;
margin: 12px auto;


`;

const Condition=styled.span`
margin: 30px auto:
font-size: 20px;

 & span {
    font-size:35px; 
 }

`;
const WeatherIcon = styled.img`
width: 110px;
height: 105px;
margin: 6px auto;
`;

const Location=styled.span`
font-size: 35px;
font-weight: bold;
`;

const WeatherInfoLabel=styled.span`
font-size: 15px;
font-weight: bold;
margin: 26px 30px 15 px;
text-align: start;
width: 80%;
`;

const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoIcon = styled.img`
  width: 35px;
  height: 25px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};
const WeatherComponent = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
            <WeatherContainer>
                <Condition>
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                </Condition>
                <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]}/>
            </WeatherContainer>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>

            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name={isDay ? "Sunset" : "Sunrise"}
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <WeatherInfoComponent name={"Humidity"} value={weather?.main?.humidity}/>
                <WeatherInfoComponent name={"Wind"} value={weather?.wind?.speed}/>
                <WeatherInfoComponent name={"Pressure"} value={weather?.main?.pressure}/>
            </WeatherInfoContainer>
        </>
    );
};

export default WeatherComponent;




