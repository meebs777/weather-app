async function getWeatherData(location) {
  try {
      const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&include=days%2Ccurrent&key=C8A8ZX454796DUF52CDNCX2KK&contentType=json`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch with error: ", error)
  }
}

export async function currentConditions(location) {
  const data = await getWeatherData(location);
  const conditions = data.currentConditions;
  const days = data.days;

  return { conditions, days };
}

//Properties to pull out datetime, temp, feelslike, conditions, icon. Properites to pull out of days array tempmax, temp min, icon
