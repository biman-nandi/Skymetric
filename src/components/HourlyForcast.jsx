import { Clock3, Clock6, Clock9, Clock12, Clock1 } from "lucide-react";


export default function HourlyForcast(props) {
    const data = props.forcast

    if (!data)  return;

    const ForcastHour = data.list.slice(1,6)

    const getTimeIcon = (time) => {
        if (time === "15:00") {
            return <Clock3 size={45} className="my-2" />
        }
        else if (time == "18:00") {
            return <Clock6 size={45} className="my-2" />
        }
        else if (time === "21:00") {
            return <Clock9 size={45} className="my-2" />
        }
        else {
            return <Clock12 size={45} className="my-2" />
        }
    }

    return (
        <div className={`${props.darkMode ? "bg-[#313030]" : "bg-[#D9D9D9]"} p-8 flex flex-col items-center rounded-2xl shadow-lg shadow-gray-900 h-full`}>
            <h3 className="font-bold text-2xl mb-6">Hourly Forecast:</h3>

            <div className="grid grid-cols-5 gap-4 w-full">
                {ForcastHour.map((ele, idx) => (
                    <div 
                        key={idx}
                        // style={{background: ele.background}}
                        className="flex flex-col items-center rounded-2xl py-3
                    ">
                        <p className="text-sm font-bold">{ele.dt_txt.split(" ")[1].slice(0,5)}</p>
                        <img src={`https://rodrigokamada.github.io/openweathermap/images/${ele.weather[0].icon}_t@2x.png`} className="w-23" alt={`ele.weather[0].description`} />
                        <p className="text-sm font-semibold">{ele.main.temp}°C</p>
                        {getTimeIcon(ele.dt_txt.split(" ")[1].slice(0,5))}
                        <p className="text-sm font-bold">{ele.wind.speed}km/h</p>
                    </div>
                ))}
            </div>
        </div>
    )
}