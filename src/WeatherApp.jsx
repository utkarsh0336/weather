import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
import Navbar from "./Navbar";
export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        
        <div className="bg" style={{textAlign: "center"}}>
          
            {/* <img src="https://img.freepik.com/free-vector/thunder-clouds-background-vector-green-with-glittery-cute-doodle-illustration-kids_53876-105742.jpg?size=626&ext=jpg" alt="" style={{}}/> */}
            <h2>
                Weather App by Utkarsh
            </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}