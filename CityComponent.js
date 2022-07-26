import styled from "styled-components";

import React from "react";

 const WelcomeWeatherLogo =styled.img`
 width: 180px;
 height: 190px
 margin: 60 px auto;
 `

 const ChooseCityLabel =styled.span`
 color: blue;
 font-size: 25px;
 font-wieght: bold;
 margin: 45px  auto;
 padding: 15px;

 `

 const SearchBox  =styled.form`
 display:flex;
 flex-direction: row;
 border: green solid 2 px;
 border-radius: 5px;
 color: black;
 font-size: 40px;
 font-wieght: bold;
 margin: 60px auto;
 padding:10px;
& input{
    padding:5px;
    font-size:12px;
    font-wieght: bold;
}

& button{
    padding:10px;
    font-size:12px;
    font-wieght: 100;
    color: yellow;
    background-color:red;
    cursor:pointer;
}
 `


 const CityComponent = (props) => {
    const { updateCity, fetchWeather } = props;
    return (
      <>
        <WelcomeWeatherLogo src={"/icon/bg1.webp"} />
        <ChooseCityLabel> <i>Here You can Get Live Weather Conditions of Your City...</i> </ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
          <input
            onChange={(e) => updateCity(e.target.value)}
            placeholder="City"
          />
          <button type={"submit"}>Search</button>
        </SearchBox>
      </>
    );
  };
  export default CityComponent;