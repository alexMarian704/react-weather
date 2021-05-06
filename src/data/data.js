
const urls = (city , lon , lat)=>{
    return{
        firstUrl:`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
        secondUrl:`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
        thirdUrl:`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
    }
}

export default urls;