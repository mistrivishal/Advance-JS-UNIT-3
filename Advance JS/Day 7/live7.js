function getData(){
    event.preventDefault()
    let city = document.getElementById("city").value
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c873745b8adc58393d29eeb7abc89fc3`;

    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log(res)
        append(res)
    })
    .catch(function(err){
        return err
    })
}
function getlocation(lat,lon){
    // event.preventDefault()
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c873745b8adc58393d29eeb7abc89fc3`;

    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log(res)
        append(res)
    })
    .catch(function(err){
        return err
    })
}
function append(data){
    document.getElementById("container").innerHTML = null
    let container = document.getElementById("container")
    let map = document.getElementById("gmap_canvas")
    let city = document.createElement("p")
    city.innerText = `City: ${data.name}`

    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    let mintemp = document.createElement("p")
    mintemp.innerText = `Min Temp: ${(data.main.temp_min - 274.15).toFixed(2)}° C`

    let maxtemp = document.createElement("p")
    maxtemp.innerText = `Max Temp: ${(data.main.temp_max - 274.15).toFixed(2)}° C`

    let temp = document.createElement("p")
    temp.innerText = `Current Temp: ${(data.main.temp - 274.15).toFixed(2)}° C`

    let humidity = document.createElement("p")
    humidity.innerText = `Humidity: ${data.main.humidity}`

    container.append(city,mintemp,maxtemp,temp,humidity)
}
function getweather (){
navigator.geolocation.getCurrentPosition(success);

    function success(position){
        var crd = position.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        getlocation(crd.latitude,crd.longitude)
    }
}