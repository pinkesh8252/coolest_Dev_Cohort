// select
const searchBtn = document.querySelector("#search");
const searchInput = document.querySelector("input");

// event listener
searchBtn.addEventListener("click", async function(){
    // select value
    const location = searchInput.value;
    // check for empty
    if(location !=""){
    // get data
        const data = await fetchWeather(location)
        //  update data inside my dom
        if(data != null){
            updateDOM(data);
        }
        searchInput.value = "";
        
    }
})

const tempElem=document.querySelector(".temprature");
const iconElem=document.querySelector(".emoji");
const textElem=document.querySelector(".condition");
const locationElem =document.querySelector(".location");
const dateElem = document.querySelector(".date");
const timeElem = document.querySelector(".time");

function updateDOM(data){
   console.log(data);
   const temp = data.current.temp_c;
   const iconLink = data.current.condition.icon;
   const weatherText = data.current.condition.text;
   const location = data.location.name;
   const timedate = data.location.localtime;
   const [date,time] = timedate.split(" ");

   tempElem.textContent = temp+"°C";
   iconElem.src= iconLink;
   textElem.innerText=weatherText;
   locationElem.textContent=location;
   dateElem.innerText=date;
   timeElem.innerText=time;
}
   

async function fetchWeather(location){
    const url = `http://api.weatherapi.com/v1/current.json?key=b863dbd53f534f059a713744252805&q=${location}&aqi=no`
    const response = await fetch(url)
    if(response.status == 400){
        alert("location is inviled");
        return null;
    }
    else if(response.status == 200){
        const json = await response.json();
        return json;
    }
}