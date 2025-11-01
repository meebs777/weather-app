import { currentConditions } from "./api";
import "./styles.css";

// const { conditions, days } = await currentConditions("calgary");
const search = document.querySelector("button");
const input = document.querySelector("input");
const locationTitle = document.querySelector("#city");
const mainIcon = document.querySelector("#main-icon");
const mainTemp = document.getElementById("temp")
const conds = document.getElementById("conditions")
const high = document.getElementById("high")
const low = document.getElementById("low")

async function handleSearch() {
  try {
    const city = input.value || "calgary";
    const { conditions, days } = await currentConditions(city);
    refreshCard(conditions, days);
    refreshForecast(days);
    input.value = "";
  } catch (err) {
    console.error("Failed to fetch weather data", err);
  }
}
function refreshCard(conditions, days) {
  console.log(conditions, days);
  input.value ? locationTitle.textContent =
    input.value[0].toUpperCase() + input.value.slice(1) : locationTitle.textContent = "Calgary";
  import(
    /* webpackInclude: /\.svg$/ */
    `../images/3rd Set - Color/${conditions.icon}.svg`
  ).then((module) => {
    mainIcon.src = module.default;
  });
    mainTemp.textContent = Math.round(parseFloat(conditions.temp)).toString() + "°C"
    conds.textContent = conditions.conditions;
    high.textContent = "H: " + Math.round(parseFloat(days[0].tempmax)).toString() + "°C"
    low.textContent = "L: " + Math.round(parseFloat(days[0].tempmin)).toString() + "°C"
}
function refreshForecast(days) {
  for (let index = 1; index < 6; index++) {
    const currentDay = days[index];
    const forecast = "#forecast-" + index;
    const li = document.querySelector(forecast);
    const title = li.querySelector("h5");
    const hi = li.querySelector(".forecast-container > .hi");
    const lo = li.querySelector(".forecast-container > .lo");
    const image = li.querySelector("img")
    import(
      /* webpackInclude: /\.svg$/ */
      `../images/3rd Set - Color/${currentDay.icon}.svg`
    ).then((module) => {
      image.src = module.default;
    });
    hi.textContent = "H: "+ Math.round(parseFloat(currentDay.tempmax)).toString() + "°C";
    lo.textContent = "L: " + Math.round(parseFloat(currentDay.tempmin)).toString() + "°C";
    title.textContent = currentDay.datetime.slice(5)
    }
}
handleSearch();
search.addEventListener("click", handleSearch);

