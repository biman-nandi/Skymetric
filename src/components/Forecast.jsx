export default function Forecast(props) {
    const data = props.forcast

    if (!data)  return;

    const fiveDays = data.list.filter((ele) => (
        ele.dt_txt.includes("12:00:00")
    ))


    return (
        <div className={`${props.darkMode ? "bg-[#313030]" : "bg-[#D9D9D9]"} pt-5 pb-1 text-center rounded-2xl shadow-lg shadow-gray-900 h-full`}>
            <h3 className="font-bold text-2xl">5 Days Forecast:</h3>

            {fiveDays.map((ele, idx) => (
                <div key={idx} className="grid grid-cols-3 px-4 place-items-center">
                    <img src={`https://rodrigokamada.github.io/openweathermap/images/${ele.weather[0].icon}_t@2x.png`} alt={ele.weather[0].description} className='w-15' />
                    <p className="text-sm font-bold">{Math.floor(ele.main.temp)}°C</p>
                    <p className="text-sm font-bold">{new Date(ele.dt * 1000).toLocaleDateString('en-IN', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'short',
                    })}</p>
                </div>
            ))}
            
        </div>
    )
}