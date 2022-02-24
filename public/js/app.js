const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const weatherForecastImg = document.querySelector('#weather-forecast-img')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    if (location.includes('?')) {
        return messageOne.textContent = 'Invalid input!!!'
    }

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    weatherForecastImg.setAttribute('src', '')

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                weatherForecastImg.setAttribute('src', data.weatherForecastImg)
            }
        })
    })
})