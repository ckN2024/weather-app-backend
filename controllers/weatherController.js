import axios from "axios"
import successResponse from "../helpers/response/successResponse.js"
import errorResponse from "../helpers/response/errorResponse.js"


// get current weather
const getCurrentWeather = async (req, res) => {
    try {
        const {city} = req.headers
        // console.log(`currentWeather: `,city)
        const APIKEY = process.env.WEATHER_API_KEY
        // console.log(APIKEY)
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
    
        const response = await axios.get(url);
        const currentWeather = response.data;

        successResponse(res, 200, currentWeather, "weather fetched successfully")
    } catch (error) {
       console.log("Error fetching city weather")
       console.log(`error: ${error}`)
       
       errorResponse(res, 400, "Error in fetching current weather", error.message)
    }
}

// get five days weather
const getFiveDaysWeather = async (req, res) => {
    try {
        const {city} = req.headers
        // console.log(city)
        const APIKEY = process.env.WEATHER_API_KEY
        
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&cnt=5`
    
        const response = await axios.get(url);
        const currentWeather = response.data;
         
        successResponse(res, 200, currentWeather, "weather fetched successfully")
    } catch (error) {
       console.log("Error fetching city weather")
       
       errorResponse(res, 400, "Error in fetching", error.message)
    }
}

export {getCurrentWeather, getFiveDaysWeather}