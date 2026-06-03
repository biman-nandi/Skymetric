const API_KEY = import.meta.env.VITE_API_KEY

export const getCurrentCity = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

        if (!response.ok) {
            throw new Error(`HTTP error! status code ${response.status}`)
        }

        const data = response.json()
        return data;
        
    } catch (error) {
        throw new Error(error.message)
    }
}

export const getForcast = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)

        if (!response.ok) {
            throw new Error(`HTTP error! status code ${response.status}`)
        }

        const data = response.json()
        return data;
        
    } catch (error) {
        throw new Error(error.message)
    }
}
