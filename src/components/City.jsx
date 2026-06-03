export default function City(props) {
    const data = props.weatherData

    if (!data) {
        return;
    }

    const utcNow = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    const getTime = new Date(utcNow + data.timezone * 1000).toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })

    const getData = new Date(data.dt * 1000).toLocaleDateString('en-IN', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })


    return (
        <div className={`${props.darkMode ? "bg-[#313030]" : "bg-[#D9D9D9]"} py-8 flex flex-col justify-center items-center rounded-2xl shadow-lg shadow-gray-900 h-full`}>
            <h3 className="font-bold text-2xl mb-6">{data.name}</h3>
            <h1 className="font-bold text-6xl mb-2">{getTime}</h1>
            <p className="text-sm">{getData}</p>
        </div>
    )
}