async function getWeatherData(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}next7days?unitGroup=metric&include=days%2Ccurrent&key=C8A8ZX454796DUF52CDNCX2KK&contentType=json`) 
    const data = await response.json();
    return data;
}

export async function currentConditions(location) {
    const data = await getWeatherData(location);
    const conditions = data.currentConditions;
    return conditions
}

//Properties to pull out datetime, temp, feelslike, conditions, icon