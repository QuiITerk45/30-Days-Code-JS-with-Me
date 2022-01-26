
let searchInput = document.querySelector('#search')
let cityName = document.querySelector('.city-name')
let getCountry = document.querySelector('#country')
let getHour = document.querySelector('.hour')
let getDate = document.querySelector('#date')
let getInfoAll = document.querySelector('.info-all')
let getTemp = document.querySelector('.show-temp')
let getbottom = document.querySelector('.bottom-weather')
let getStatus = document.querySelector('.status-weather')
let statusAll = document.querySelectorAll('#info')



let getBody = document.querySelector('body')
let getContainer = document.querySelector('.weather-container')

//Nhập thông tin thành phố
searchInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        infoWeather(e.target.value)
    }
})

function CheckImgTemp(data) {
    let status;

    if (data >= 20) {
        status = './img/hot.png'
    }
    else if (data <= 10) {
        status = './img/cold.png'
    }
    else if (data >= 10 && data <= 15) {
        status = './img/cool.jpg'
    }
    else if (data >= 15 && data <= 20) {
        status = './img/wind.png'
    }
    document.querySelector('body').style.backgroundImage = `url('${status}')`
    document.querySelector('.weather-container').style.backgroundImage = `url(${status})`

}

async function infoWeather(info) {
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${info}&appid=5b3cbf8fb4fbe49b4cc199c8890f7081`

    let getInfo = await fetch(link).then((res) => res.json())

    console.log(getInfo)
    if (getInfo.cod === 200) {
        let searchInput = document.querySelector('#search')
        let cityName = document.querySelector('.city-name')
        let getCountry = document.querySelector('#country')
        let getHour = document.querySelector('.hour')
        let getDate = document.querySelector('#date')
        let getInfoAll = document.querySelector('.info-all')
        let getTemp = document.querySelector('.show-temp')
        let getbottom = document.querySelector('.bottom-weather')
        let getStatus = document.querySelector('.status-weather')
        let statusAll = document.querySelectorAll('#info')

        cityName.innerHTML = getInfo.name
        getCountry.innerHTML = getInfo.sys.country
        getHour.innerHTML = new Date().toLocaleTimeString('vi-VN')
        getDate.innerHTML = new Date().toLocaleDateString('vi-VN')
        getTemp.innerHTML = Math.floor(getInfo.main.temp - 273.15) + ' &#176C'

        CheckImgTemp(getTemp.innerText.slice(0, 2))

        getStatus.innerHTML = getInfo.weather[0].main
        statusAll[0].innerHTML = getInfo.visibility + ' (m)';
        statusAll[1].innerHTML = getInfo.wind.speed + ' (m/s)';
        statusAll[2].innerHTML = getInfo.clouds.all + ' (%)';
    }
    else {
        cityName.innerHTML = getInfo.message
        getCountry.innerHTML = ' '
        getbottom.innerHTML = ' '
    }


}


infoWeather('ha noi')