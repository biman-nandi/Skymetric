import City from "./City";
import NavBar from "./NavBar";
import Temp from "./Temp";
import Forecast from "./Forecast"
import HourlyForcast from "./HourlyForcast";
import { useEffect, useState } from "react";
import { getCurrentCity, getForcast } from "../services/weatherApi.js";


export default function Home() {
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState("")
    const [forcast, setForcast] = useState("")
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode)

    },[darkMode])

    useEffect(() => {
        const fetchWeatherData = async () => {
            if (!city.trim())   return;

            const data = await getCurrentCity(city)
            setWeatherData(data)
        }

        const fetchForcast = async () => {
            if (!city.trim())   return;

            const data = await getForcast(city)
            console.log(data)
            setForcast(data)
        }

        fetchWeatherData()
        fetchForcast()
        
    }, [city])

    return(
        <>
            <NavBar setCity={setCity} darkMode={darkMode} setDarkMode={setDarkMode} />
            
            <main className="mt-10 md:grid grid-cols-10 gap-10">
                <div className="col-span-4 pb-8 md:pb-0"><City weatherData={weatherData} darkMode={darkMode} /></div>
                <div className="col-span-6 pb-8 md:pb-0"><Temp weatherData={weatherData} darkMode={darkMode} /></div>
                <div className="col-span-3 pb-8 md:pb-0"><Forecast forcast={forcast} darkMode={darkMode} /></div>
                <div className="col-span-7 pb-8 md:pb-0"><HourlyForcast forcast={forcast} darkMode={darkMode} /></div>
            </main>

        </>
    )
}