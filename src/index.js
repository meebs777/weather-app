import { currentConditions } from "./api";
import "./styles.css"

// const { conditions, days } = await currentConditions("calgary");
const search = document.querySelector("button");
const input = document.querySelector("input");
async function handleSearch() {
    try {
        const { conditions, days } = await currentConditions(input.value);
        refreshDom(conditions, days);
    } catch (err) {
        console.error("Failed to fetch weather data", err)
    }
}
function refreshDom(conditions,days) {
    console.log(conditions,days)
}
search.addEventListener("click", handleSearch);
